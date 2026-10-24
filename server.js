const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname));

const DATA_FILE = path.join(__dirname, 'users.json');
const MSG_FILE = path.join(__dirname, 'messages.json');

function loadData(file) {
    if (!fs.existsSync(file)) {
        fs.writeFileSync(file, JSON.stringify({}));
    }
    try {
        return JSON.parse(fs.readFileSync(file, 'utf-8'));
    } catch (e) {
        return {};
    }
}

function saveData(file, data) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

const onlineUsers = new Map();

function isValidPassword(pw) {
    if (!pw || pw.length < 12) return false;
    return /[^A-Za-z0-9]/.test(pw);
}

function getChatKey(u1, u2) {
    return [u1, u2].sort().join(':');
}

function getFriendsPayload(username, users) {
    const userRecord = users[username];
    if (!userRecord || !userRecord.friends) return [];
    const msgs = loadData(MSG_FILE);

    return userRecord.friends.map(fName => {
        const key = getChatKey(username, fName);
        const history = msgs[key] || [];
        const last = history[history.length - 1];
        return {
            username: fName,
            online: onlineUsers.has(fName),
            lastMsg: last ? last.text : '',
            lastTime: last ? last.time : ''
        };
    });
}

io.on('connection', (socket) => {
    let currentUser = null;

    function completeLogin(username, token, users) {
        currentUser = username;
        onlineUsers.set(currentUser, socket.id);

        socket.emit('login-success', {
            username: currentUser,
            token: token,
            friends: getFriendsPayload(currentUser, users)
        });

        (users[currentUser].friends || []).forEach(fName => {
            const fSock = onlineUsers.get(fName);
            if (fSock) {
                io.to(fSock).emit('friend-status', { username: currentUser, online: true });
            }
        });
    }

    socket.on('auth-token', ({ token }) => {
        if (!token) return;
        const users = loadData(DATA_FILE);
        const found = Object.keys(users).find(u => users[u].token === token);
        if (found) {
            completeLogin(found, token, users);
        } else {
            socket.emit('token-invalid');
        }
    });

    socket.on('auth-register', async ({ username, password }) => {
        const cleanUser = (username || '').trim();
        if (!cleanUser || !password) {
            return socket.emit('auth-result', { msg: 'Enter username and password' });
        }
        if (cleanUser.length < 3 || cleanUser.length > 20) {
            return socket.emit('auth-result', { msg: 'Username must be 3-20 characters' });
        }
        if (!isValidPassword(password)) {
            return socket.emit('auth-result', { msg: 'Password needs 12+ chars and 1 symbol' });
        }

        const users = loadData(DATA_FILE);
        if (users[cleanUser]) {
            return socket.emit('auth-result', { msg: 'Username already taken' });
        }

        const hash = await bcrypt.hash(password, 10);
        const token = crypto.randomBytes(24).toString('hex');

        users[cleanUser] = {
            password: hash,
            token: token,
            friends: []
        };
        saveData(DATA_FILE, users);
        completeLogin(cleanUser, token, users);
    });

    socket.on('auth-login', async ({ username, password }) => {
        const cleanUser = (username || '').trim();
        const users = loadData(DATA_FILE);
        const userRecord = users[cleanUser];

        if (!userRecord) {
            return socket.emit('auth-result', { msg: 'Invalid username or password' });
        }

        const match = await bcrypt.compare(password, userRecord.password);
        if (!match) {
            return socket.emit('auth-result', { msg: 'Invalid username or password' });
        }

        if (!userRecord.token) {
            userRecord.token = crypto.randomBytes(24).toString('hex');
            saveData(DATA_FILE, users);
        }

        completeLogin(cleanUser, userRecord.token, users);
    });

    socket.on('auth-logout', () => {
        if (!currentUser) return;
        const users = loadData(DATA_FILE);
        if (users[currentUser]) {
            delete users[currentUser].token;
            saveData(DATA_FILE, users);
        }
        onlineUsers.delete(currentUser);
        currentUser = null;
    });

    socket.on('search-users', (query) => {
        if (!currentUser) return;
        const cleanQuery = (query || '').trim().toLowerCase();
        if (!cleanQuery) return socket.emit('search-results', []);

        const users = loadData(DATA_FILE);
        const myFriends = (users[currentUser] && users[currentUser].friends) || [];

        const matches = Object.keys(users)
            .filter(u => u.toLowerCase().includes(cleanQuery) && u !== currentUser)
            .slice(0, 8)
            .map(u => ({
                username: u,
                online: onlineUsers.has(u),
                isFriend: myFriends.includes(u)
            }));

        socket.emit('search-results', matches);
    });

    socket.on('add-friend', (targetName) => {
        if (!currentUser) return;
        const target = (targetName || '').trim();
        if (target === currentUser) return;

        const users = loadData(DATA_FILE);
        if (!users[target]) {
            return socket.emit('friend-error', 'User not found');
        }

        const myFriends = users[currentUser].friends || [];
        if (!myFriends.includes(target)) {
            myFriends.push(target);
            users[currentUser].friends = myFriends;
        }

        const targetFriends = users[target].friends || [];
        if (!targetFriends.includes(currentUser)) {
            targetFriends.push(currentUser);
            users[target].friends = targetFriends;
        }

        saveData(DATA_FILE, users);

        socket.emit('friend-added', {
            username: target,
            online: onlineUsers.has(target),
            lastMsg: '',
            lastTime: ''
        });

        const targetSocket = onlineUsers.get(target);
        if (targetSocket) {
            io.to(targetSocket).emit('friend-added', {
                username: currentUser,
                online: true,
                lastMsg: '',
                lastTime: ''
            });
        }
    });

    socket.on('load-chat', (target) => {
        if (!currentUser || !target) return;
        const msgs = loadData(MSG_FILE);
        const key = getChatKey(currentUser, target);
        socket.emit('chat-history', { target, messages: msgs[key] || [] });
    });

    socket.on('send-chat', ({ to, text }) => {
        if (!currentUser || !to || !text || !text.trim()) return;
        const msg = {
            sender: currentUser,
            to: to,
            text: text.trim(),
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
        };

        const msgs = loadData(MSG_FILE);
        const key = getChatKey(currentUser, to);
        if (!msgs[key]) msgs[key] = [];
        msgs[key].push(msg);
        saveData(MSG_FILE, msgs);

        socket.emit('chat-message', msg);
        const targetSock = onlineUsers.get(to);
        if (targetSock) {
            io.to(targetSock).emit('chat-message', msg);
        }
    });

    socket.on('change-username', ({ newUsername }) => {
        if (!currentUser) return;
        const clean = (newUsername || '').trim();
        if (clean.length < 3 || clean.length > 20) {
            return socket.emit('settings-msg', { ok: false, msg: 'Username must be 3-20 chars' });
        }
        if (clean === currentUser) return;

        const users = loadData(DATA_FILE);
        if (users[clean]) {
            return socket.emit('settings-msg', { ok: false, msg: 'Username taken' });
        }

        users[clean] = users[currentUser];
        delete users[currentUser];

        Object.keys(users).forEach(u => {
            if (users[u].friends) {
                users[u].friends = users[u].friends.map(f => f === currentUser ? clean : f);
            }
        });

        saveData(DATA_FILE, users);

        const oldName = currentUser;
        currentUser = clean;
        onlineUsers.delete(oldName);
        onlineUsers.set(currentUser, socket.id);

        socket.emit('username-updated', { newUsername: clean });
        socket.emit('settings-msg', { ok: true, msg: 'Username changed' });
    });

    socket.on('change-password', async ({ oldPassword, newPassword }) => {
        if (!currentUser) return;
        if (!isValidPassword(newPassword)) {
            return socket.emit('settings-msg', { ok: false, msg: 'Needs 12+ chars & 1 symbol' });
        }

        const users = loadData(DATA_FILE);
        const userRecord = users[currentUser];
        const match = await bcrypt.compare(oldPassword, userRecord.password);
        if (!match) {
            return socket.emit('settings-msg', { ok: false, msg: 'Wrong current password' });
        }

        userRecord.password = await bcrypt.hash(newPassword, 10);
        saveData(DATA_FILE, users);
        socket.emit('settings-msg', { ok: true, msg: 'Password updated' });
    });

    socket.on('signal', ({ targetUser, signal }) => {
        const targetSocket = onlineUsers.get(targetUser);
        if (targetSocket) {
            io.to(targetSocket).emit('signal', { sender: currentUser, signal });
        }
    });

    socket.on('disconnect', () => {
        if (currentUser) {
            onlineUsers.delete(currentUser);
            const users = loadData(DATA_FILE);
            const friends = (users[currentUser] && users[currentUser].friends) || [];
            friends.forEach(fName => {
                const fSock = onlineUsers.get(fName);
                if (fSock) {
                    io.to(fSock).emit('friend-status', { username: currentUser, online: false });
                }
            });
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
