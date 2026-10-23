const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const fs = require('fs');
const bcrypt = require('bcrypt');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

const USERS_FILE = './users.json';

function loadUsers() {
    if (!fs.existsSync(USERS_FILE)) return {};
    try {
        return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
    } catch {
        return {};
    }
}

function saveUsers(users) {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

let activeSockets = {}; // username -> socketId
let socketToUser = {}; // socketId -> username

io.on('connection', (socket) => {

    socket.on('auth-register', async ({ username, password }) => {
        const users = loadUsers();
        const cleanUser = username.trim().toLowerCase();

        if (!cleanUser || !password) {
            return socket.emit('auth-result', { success: false, msg: 'Missing credentials.' });
        }
        if (users[cleanUser]) {
            return socket.emit('auth-result', { success: false, msg: 'Username already taken.' });
        }

        const hash = await bcrypt.hash(password, 10);
        users[cleanUser] = {
            username: cleanUser,
            passwordHash: hash,
            friends: []
        };
        saveUsers(users);
        socket.emit('auth-result', { success: true, msg: 'Registered successfully. Please login.' });
    });

    socket.on('auth-login', async ({ username, password }) => {
        const users = loadUsers();
        const cleanUser = username.trim().toLowerCase();

        if (!users[cleanUser]) {
            return socket.emit('auth-result', { success: false, msg: 'User does not exist.' });
        }

        const match = await bcrypt.compare(password, users[cleanUser].passwordHash);
        if (!match) {
            return socket.emit('auth-result', { success: false, msg: 'Incorrect password.' });
        }

        activeSockets[cleanUser] = socket.id;
        socketToUser[socket.id] = cleanUser;

        const friendStatuses = users[cleanUser].friends.map(f => ({
            username: f,
            online: !!activeSockets[f]
        }));

        socket.emit('login-success', {
            username: cleanUser,
            friends: friendStatuses
        });

        // Notify friends user is online
        users[cleanUser].friends.forEach(f => {
            if (activeSockets[f]) {
                io.to(activeSockets[f]).emit('friend-status', { username: cleanUser, online: true });
            }
        });
    });

    socket.on('add-friend', (friendName) => {
        const cleanFriend = friendName.trim().toLowerCase();
        const currentUser = socketToUser[socket.id];
        if (!currentUser) return;

        const users = loadUsers();
        if (!users[cleanFriend]) {
            return socket.emit('friend-error', 'User does not exist.');
        }
        if (cleanFriend === currentUser) {
            return socket.emit('friend-error', 'You cannot add yourself.');
        }
        if (users[currentUser].friends.includes(cleanFriend)) {
            return socket.emit('friend-error', 'Already in your friends list.');
        }

        users[currentUser].friends.push(cleanFriend);
        if (!users[cleanFriend].friends.includes(currentUser)) {
            users[cleanFriend].friends.push(currentUser);
        }
        saveUsers(users);

        socket.emit('friend-added', {
            username: cleanFriend,
            online: !!activeSockets[cleanFriend]
        });

        if (activeSockets[cleanFriend]) {
            io.to(activeSockets[cleanFriend]).emit('friend-added', {
                username: currentUser,
                online: true
            });
        }
    });

    socket.on('send-chat', ({ text }) => {
        const sender = socketToUser[socket.id];
        if (!sender || !text.trim()) return;

        io.emit('chat-message', {
            sender,
            text,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
    });

    // WebRTC Signaling
    socket.on('signal', ({ targetUser, signal }) => {
        const sender = socketToUser[socket.id];
        const targetSocketId = activeSockets[targetUser];
        if (targetSocketId) {
            io.to(targetSocketId).emit('signal', {
                sender,
                signal
            });
        }
    });

    socket.on('disconnect', () => {
        const user = socketToUser[socket.id];
        if (user) {
            delete activeSockets[user];
            delete socketToUser[socket.id];

            const users = loadUsers();
            if (users[user]) {
                users[user].friends.forEach(f => {
                    if (activeSockets[f]) {
                        io.to(activeSockets[f]).emit('friend-status', { username: user, online: false });
                    }
                });
            }
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`extorted daemon running on port ${PORT}`);
});
