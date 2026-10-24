<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>extorted</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }

        body {
            background-color: #0c0c0e;
            background-image: radial-gradient(#1c1c24 1px, transparent 1px);
            background-size: 20px 20px;
            color: #fff;
            height: 100vh;
            overflow: hidden;
            display: flex;
            padding: 10px;
            gap: 12px;
        }

        #auth-screen {
            position: fixed;
            inset: 0;
            background: #111216;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
        }

        .auth-box {
            width: 340px;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .auth-title {
            font-size: 24px;
            font-weight: 600;
            text-align: center;
            margin-bottom: 8px;
        }

        .auth-input {
            background: #1c1d24;
            border: 1px solid #2e303b;
            border-radius: 10px;
            color: #fff;
            padding: 13px 15px;
            font-size: 14px;
            outline: none;
            width: 100%;
        }

        .auth-input:focus {
            border-color: #766ac8;
        }

        .auth-submit {
            background: #766ac8;
            color: #fff;
            border: none;
            border-radius: 10px;
            padding: 13px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            margin-top: 4px;
        }

        .auth-submit:hover {
            background: #675ab8;
        }

        .auth-switch {
            text-align: center;
            font-size: 13px;
            color: #8b8e99;
            cursor: pointer;
            margin-top: 6px;
            user-select: none;
        }

        .auth-switch span {
            color: #766ac8;
            font-weight: 500;
        }

        #auth-err {
            color: #ff5252;
            font-size: 12px;
            text-align: center;
            min-height: 16px;
        }

        #sidebar {
            width: 350px;
            background: #1c1c21;
            border-radius: 18px;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
            flex-shrink: 0;
        }

        .side-top {
            padding: 10px 12px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .icon-btn {
            background: transparent;
            border: none;
            color: #a0a2ab;
            cursor: pointer;
            padding: 6px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .icon-btn:hover {
            background: rgba(255,255,255,0.06);
            color: #fff;
        }

        .icon-btn svg {
            width: 20px;
            height: 20px;
            fill: currentColor;
        }

        .search-wrap {
            flex: 1;
            background: #121216;
            border-radius: 20px;
            display: flex;
            align-items: center;
            padding: 7px 12px;
            gap: 8px;
        }

        .search-wrap svg {
            width: 16px;
            height: 16px;
            fill: #777982;
            flex-shrink: 0;
        }

        .search-wrap input {
            background: transparent;
            border: none;
            color: #fff;
            font-size: 13.5px;
            outline: none;
            width: 100%;
        }

        .my-mini-avatar {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: #2ebd85;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            font-weight: 600;
            color: #fff;
            cursor: pointer;
            flex-shrink: 0;
            text-transform: uppercase;
            border: 2px solid #2ebd85;
        }

        #search-dropdown {
            display: none;
            position: absolute;
            top: 52px;
            left: 12px;
            right: 12px;
            background: #25262e;
            border-radius: 12px;
            padding: 6px;
            z-index: 90;
            box-shadow: 0 8px 24px rgba(0,0,0,0.5);
        }

        .s-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 10px;
            border-radius: 8px;
        }

        .s-row:hover {
            background: #2f303b;
        }

        .s-btn {
            background: #766ac8;
            border: none;
            color: #fff;
            padding: 5px 10px;
            border-radius: 6px;
            font-size: 12px;
            cursor: pointer;
        }

        .notif-card {
            margin: 4px 10px 8px 10px;
            background: #262730;
            border-radius: 12px;
            padding: 10px 12px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }

        .notif-card h4 {
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 2px;
        }

        .notif-card p {
            font-size: 12px;
            color: #9b9da6;
        }

        .notif-close {
            background: transparent;
            border: none;
            color: #9b9da6;
            cursor: pointer;
            font-size: 14px;
        }

        #chat-list {
            flex: 1;
            overflow-y: auto;
            padding: 4px 8px 76px 8px;
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .chat-row {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 9px 10px;
            border-radius: 12px;
            cursor: pointer;
            user-select: none;
        }

        .chat-row:hover {
            background: #25262e;
        }

        .chat-row.active {
            background: #766ac8;
        }

        .chat-row.active .c-sub,
        .chat-row.active .c-time {
            color: rgba(255,255,255,0.85);
        }

        .c-avatar {
            width: 46px;
            height: 46px;
            border-radius: 50%;
            background: #393a47;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 16px;
            color: #fff;
            flex-shrink: 0;
            text-transform: uppercase;
            position: relative;
        }

        .c-info {
            flex: 1;
            min-width: 0;
        }

        .c-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 3px;
        }

        .c-name {
            font-size: 14px;
            font-weight: 600;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .c-time {
            font-size: 11px;
            color: #8b8e99;
        }

        .c-sub {
            font-size: 13px;
            color: #8b8e99;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .fab-pencil {
            position: absolute;
            bottom: 16px;
            right: 16px;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: #766ac8;
            border: none;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        }

        .fab-pencil svg {
            width: 20px;
            height: 20px;
            fill: #fff;
        }

        #drawer {
            position: absolute;
            top: 0;
            left: -280px;
            width: 270px;
            height: 100%;
            background: #1c1c21;
            border-right: 1px solid #2a2b33;
            z-index: 150;
            transition: left 0.2s ease;
            display: flex;
            flex-direction: column;
        }

        #drawer.open {
            left: 0;
        }

        #drawer-mask {
            display: none;
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,0.5);
            z-index: 140;
        }

        .d-head {
            padding: 20px 16px;
            background: #23242b;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .d-item {
            padding: 12px 16px;
            font-size: 14px;
            color: #e0e0e0;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .d-item:hover {
            background: #282932;
        }

        #main-area {
            flex: 1;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
        }

        #empty-view {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .empty-pill {
            background: #212029;
            color: #fff;
            font-size: 13px;
            padding: 6px 14px;
            border-radius: 16px;
        }

        #chat-view {
            display: none;
            flex: 1;
            flex-direction: column;
            height: 100%;
            justify-content: space-between;
            padding: 0 18px 6px 18px;
        }

        .top-pill-header {
            height: 54px;
            background: #1c1c21;
            border-radius: 28px;
            padding: 0 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 2px 10px rgba(0,0,0,0.35);
            flex-shrink: 0;
        }

        .top-user {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .top-user h4 {
            font-size: 14.5px;
            font-weight: 600;
        }

        .top-user span {
            font-size: 12px;
            color: #8b8e99;
            display: block;
        }

        .top-actions {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .ss-btn {
            background: #282933;
            border: none;
            color: #fff;
            padding: 7px 13px;
            border-radius: 16px;
            font-size: 12.5px;
            font-weight: 500;
            cursor: pointer;
        }

        .ss-btn:hover {
            background: #766ac8;
        }

        .ss-btn.active {
            background: #2ebd85;
            color: #000;
        }

        #video-box {
            display: none;
            height: 280px;
            background: #000;
            border-radius: 16px;
            margin-top: 8px;
            overflow: hidden;
            position: relative;
            flex-shrink: 0;
        }

        video {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        #msg-container {
            flex: 1;
            overflow-y: auto;
            padding: 16px 6px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            gap: 6px;
        }

        .m-row {
            display: flex;
            width: 100%;
        }

        .m-row.out {
            justify-content: flex-end;
        }

        .m-row.in {
            justify-content: flex-start;
        }

        .m-bubble {
            max-width: 65%;
            padding: 7px 12px;
            border-radius: 16px;
            font-size: 14px;
            line-height: 1.35;
            display: inline-flex;
            align-items: baseline;
            gap: 8px;
            flex-wrap: wrap;
        }

        .in .m-bubble {
            background: #23242b;
            color: #fff;
            border-bottom-left-radius: 4px;
        }

        .out .m-bubble {
            background: #766ac8;
            color: #fff;
            border-bottom-right-radius: 4px;
        }

        .m-time {
            font-size: 10.5px;
            color: rgba(255,255,255,0.65);
            margin-left: auto;
            white-space: nowrap;
        }

        .bottom-bar-wrap {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }

        .bottom-pill-input {
            flex: 1;
            height: 48px;
            background: #1c1c21;
            border-radius: 24px;
            padding: 0 16px;
            display: flex;
            align-items: center;
            gap: 12px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.35);
        }

        .bottom-pill-input svg {
            width: 20px;
            height: 20px;
            fill: #8b8e99;
            cursor: pointer;
            flex-shrink: 0;
        }

        .bottom-pill-input input {
            flex: 1;
            background: transparent;
            border: none;
            color: #fff;
            font-size: 14px;
            outline: none;
        }

        .circle-send-btn {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: #766ac8;
            border: none;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            flex-shrink: 0;
        }

        .circle-send-btn svg {
            width: 20px;
            height: 20px;
            fill: #fff;
        }

        #settings-modal {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.65);
            z-index: 1500;
            align-items: center;
            justify-content: center;
        }

        .set-card {
            background: #1c1c21;
            width: 350px;
            border-radius: 16px;
            padding: 22px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .set-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 4px;
        }

        .set-label {
            font-size: 12px;
            color: #8b8e99;
            margin-top: 4px;
        }
    </style>
</head>
<body>

    <div id="auth-screen">
        <div class="auth-box">
            <div class="auth-title" id="auth-header">Sign In</div>
            <input class="auth-input" id="u-inp" placeholder="Username" autocomplete="off">
            <input class="auth-input" id="p-inp" type="password" placeholder="Password">
            <input class="auth-input" id="p2-inp" type="password" placeholder="Confirm Password" style="display: none;">
            <button class="auth-submit" id="auth-btn" onclick="submitAuth()">Sign In</button>
            <div id="auth-err"></div>
            <div class="auth-switch" id="auth-toggle" onclick="toggleAuthMode()">
                Don't have an account? <span>Sign Up</span>
            </div>
        </div>
    </div>

    <div id="sidebar">
        <div id="drawer-mask" onclick="closeDrawer()"></div>
        <div id="drawer">
            <div class="d-head">
                <div class="c-avatar" id="d-avatar" style="background: #766ac8;">U</div>
                <div style="font-weight: 600; font-size: 15px;" id="d-name">User</div>
            </div>
            <div class="d-item" onclick="openSettings()">⚙️ Settings</div>
            <div class="d-item" onclick="logout()" style="color: #ff5252;">🚪 Log Out</div>
        </div>

        <div class="side-top">
            <button class="icon-btn" onclick="openDrawer()">
                <svg viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/></svg>
            </button>
            <div class="search-wrap">
                <svg viewBox="0 0 24 24"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/></svg>
                <input id="search-inp" placeholder="Search" oninput="onSearch(this.value)">
            </div>
            <div class="my-mini-avatar" id="top-my-avatar" onclick="openSettings()">U</div>
        </div>

        <div id="search-dropdown"></div>

        <div class="notif-card" id="notif-bar">
            <div>
                <h4>Never miss a message! 🔔</h4>
                <p>Enable notifications to stay updated.</p>
            </div>
            <button class="notif-close" onclick="document.getElementById('notif-bar').style.display='none'">✕</button>
        </div>

        <div id="chat-list"></div>

        <button class="fab-pencil" onclick="focusSearch()">
            <svg viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"/></svg>
        </button>
    </div>

    <div id="main-area">
        <div id="empty-view">
            <div class="empty-pill">Select a chat to start messaging</div>
        </div>

        <div id="chat-view">
            <div class="top-pill-header">
                <div class="top-user">
                    <div class="c-avatar" id="active-av" style="width: 36px; height: 36px; font-size: 14px;">U</div>
                    <div>
                        <h4 id="active-name">User</h4>
                        <span id="active-seen">last seen recently</span>
                    </div>
                </div>
                <div class="top-actions">
                    <button id="ss-btn" class="ss-btn" onclick="toggleScreenshare()">Screenshare</button>
                    <button class="icon-btn">
                        <svg viewBox="0 0 24 24"><path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"/></svg>
                    </button>
                </div>
            </div>

            <div id="video-box">
                <video id="remote-vid" autoplay playsinline></video>
            </div>

            <div id="msg-container"></div>

            <div class="bottom-bar-wrap">
                <div class="bottom-pill-input">
                    <svg viewBox="0 0 24 24"><path d="M16.5,6V17.5A4,4 0 0,1 12.5,21.5A4,4 0 0,1 8.5,17.5V5A2.5,2.5 0 0,1 11,2.5A2.5,2.5 0 0,1 13.5,5V15.5A1,1 0 0,1 12.5,16.5A1,1 0 0,1 11.5,15.5V6H10V15.5A2.5,2.5 0 0,0 12.5,18A2.5,2.5 0 0,0 15,15.5V5A4,4 0 0,0 11,1A4,4 0 0,0 7,5V17.5A5.5,5.5 0 0,0 12.5,23A5.5,5.5 0 0,0 18,17.5V6H16.5Z"/></svg>
                    <input id="msg-inp" placeholder="Message" onkeydown="if(event.key==='Enter') sendMsg()">
                    <svg viewBox="0 0 24 24"><path d="M12,17.5C14.33,17.5 16.3,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/></svg>
                </div>
                <button class="circle-send-btn" onclick="sendMsg()">
                    <svg viewBox="0 0 24 24"><path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"/></svg>
                </button>
            </div>
        </div>
    </div>

    <div id="settings-modal">
        <div class="set-card">
            <div class="set-top">
                <h3 style="font-size: 16px;">Settings</h3>
                <button class="notif-close" onclick="closeSettings()">✕</button>
            </div>
            <div class="set-label">Change Username</div>
            <input class="auth-input" id="new-u-inp" placeholder="New username">
            <button class="auth-submit" onclick="saveUsername()">Update Username</button>

            <div class="set-label">Change Password</div>
            <input class="auth-input" id="old-p-inp" type="password" placeholder="Current password">
            <input class="auth-input" id="new-p-inp" type="password" placeholder="New password (12+ chars & 1 symbol)">
            <button class="auth-submit" onclick="savePassword()">Update Password</button>

            <div id="set-msg" style="font-size: 12px; text-align: center; min-height: 15px;"></div>
        </div>
    </div>

    <script src="/socket.io/socket.io.js"></script>
    <script>
        const socket = io();
        let authMode = 'login';
        let myUsername = null;
        let activeTarget = null;
        let peer = null;
        let localStream = null;

        const iceConfig = {
            iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
        };

        window.addEventListener('DOMContentLoaded', () => {
            const savedToken = localStorage.getItem('ext_token');
            if (savedToken) {
                socket.emit('auth-token', { token: savedToken });
            }
        });

        socket.on('token-invalid', () => {
            localStorage.removeItem('ext_token');
        });

        function toggleAuthMode() {
            const h = document.getElementById('auth-header');
            const p2 = document.getElementById('p2-inp');
            const btn = document.getElementById('auth-btn');
            const sw = document.getElementById('auth-toggle');
            document.getElementById('auth-err').innerText = '';

            if (authMode === 'login') {
                authMode = 'register';
                h.innerText = 'Sign Up';
                p2.style.display = 'block';
                btn.innerText = 'Sign Up';
                sw.innerHTML = 'Already have an account? <span>Sign In</span>';
            } else {
                authMode = 'login';
                h.innerText = 'Sign In';
                p2.style.display = 'none';
                btn.innerText = 'Sign In';
                sw.innerHTML = "Don't have an account? <span>Sign Up</span>";
            }
        }

        function submitAuth() {
            const u = document.getElementById('u-inp').value.trim();
            const p = document.getElementById('p-inp').value;
            const p2 = document.getElementById('p2-inp').value;
            const err = document.getElementById('auth-err');

            if (!u || !p) {
                err.innerText = 'Fill in all fields';
                return;
            }

            if (authMode === 'register') {
                if (p !== p2) {
                    err.innerText = 'Passwords do not match';
                    return;
                }
                if (p.length < 12 || !/[^A-Za-z0-9]/.test(p)) {
                    err.innerText = 'Password must be 12+ chars and include 1 symbol';
                    return;
                }
            }

            socket.emit(`auth-${authMode}`, { username: u, password: p });
        }

        socket.on('auth-result', (res) => {
            document.getElementById('auth-err').innerText = res.msg;
        });

        socket.on('login-success', (data) => {
            myUsername = data.username;
            if (data.token) {
                localStorage.setItem('ext_token', data.token);
            }
            document.getElementById('auth-screen').style.display = 'none';
            document.getElementById('top-my-avatar').innerText = myUsername[0];
            document.getElementById('d-avatar').innerText = myUsername[0];
            document.getElementById('d-name').innerText = myUsername;

            const list = document.getElementById('chat-list');
            list.innerHTML = '';
            (data.friends || []).forEach(renderFriendRow);
        });

        function renderFriendRow(f) {
            const existing = document.getElementById(`row-${f.username}`);
            if (existing) existing.remove();

            const list = document.getElementById('chat-list');
            const row = document.createElement('div');
            row.className = 'chat-row' + (activeTarget === f.username ? ' active' : '');
            row.id = `row-${f.username}`;
            row.dataset.online = f.online ? '1' : '0';
            row.onclick = () => openChat(f.username);

            row.innerHTML = `
                <div class="c-avatar">${f.username[0]}</div>
                <div class="c-info">
                    <div class="c-top">
                        <div class="c-name">${f.username}</div>
                        <div class="c-time" id="time-${f.username}">${f.lastTime || ''}</div>
                    </div>
                    <div class="c-sub" id="sub-${f.username}">${f.lastMsg || (f.online ? 'online' : 'last seen recently')}</div>
                </div>
            `;
            list.prepend(row);
        }

        function onSearch(val) {
            const box = document.getElementById('search-dropdown');
            if (!val.trim()) {
                box.style.display = 'none';
                return;
            }
            socket.emit('search-users', val);
        }

        socket.on('search-results', (list) => {
            const box = document.getElementById('search-dropdown');
            box.innerHTML = '';
            if (!list.length) {
                box.style.display = 'none';
                return;
            }
            box.style.display = 'block';
            list.forEach(u => {
                const div = document.createElement('div');
                div.className = 's-row';
                div.innerHTML = `
                    <span style="font-size:13.5px;">${u.username}</span>
                    <button class="s-btn" onclick="addFriend('${u.username}')">${u.isFriend ? 'Open' : 'Add'}</button>
                `;
                box.appendChild(div);
            });
        });

        function addFriend(name) {
            document.getElementById('search-dropdown').style.display = 'none';
            document.getElementById('search-inp').value = '';
            if (document.getElementById(`row-${name}`)) {
                openChat(name);
            } else {
                socket.emit('add-friend', name);
            }
        }

        socket.on('friend-added', (f) => {
            renderFriendRow(f);
            openChat(f.username);
        });

        socket.on('friend-status', ({ username, online }) => {
            const row = document.getElementById(`row-${username}`);
            if (row) row.dataset.online = online ? '1' : '0';
            if (activeTarget === username) {
                document.getElementById('active-seen').innerText = online ? 'online' : 'last seen recently';
            }
        });

        function openChat(username) {
            activeTarget = username;
            document.getElementById('empty-view').style.display = 'none';
            document.getElementById('chat-view').style.display = 'flex';

            document.querySelectorAll('.chat-row').forEach(r => r.classList.remove('active'));
            const row = document.getElementById(`row-${username}`);
            if (row) {
                row.classList.add('active');
                const isOnline = row.dataset.online === '1';
                document.getElementById('active-seen').innerText = isOnline ? 'online' : 'last seen recently';
            }

            document.getElementById('active-av').innerText = username[0];
            document.getElementById('active-name').innerText = username;
            document.getElementById('msg-container').innerHTML = '';

            socket.emit('load-chat', username);
        }

        socket.on('chat-history', ({ target, messages }) => {
            if (target !== activeTarget) return;
            const box = document.getElementById('msg-container');
            box.innerHTML = '';
            messages.forEach(appendBubble);
        });

        function sendMsg() {
            const inp = document.getElementById('msg-inp');
            if (!inp.value.trim() || !activeTarget) return;
            socket.emit('send-chat', { to: activeTarget, text: inp.value });
            inp.value = '';
        }

        socket.on('chat-message', (msg) => {
            const other = msg.sender === myUsername ? msg.to : msg.sender;
            const sub = document.getElementById(`sub-${other}`);
            const timeEl = document.getElementById(`time-${other}`);
            if (sub) sub.innerText = msg.text;
            if (timeEl) timeEl.innerText = msg.time;

            if (activeTarget === other) {
                appendBubble(msg);
            }
        });

        function appendBubble(msg) {
            const box = document.getElementById('msg-container');
            const isMe = msg.sender === myUsername;
            const row = document.createElement('div');
            row.className = `m-row ${isMe ? 'out' : 'in'}`;
            row.innerHTML = `
                <div class="m-bubble">
                    <span>${msg.text}</span>
                    <span class="m-time">${msg.time} ${isMe ? '✓✓' : ''}</span>
                </div>
            `;
            box.appendChild(row);
            box.scrollTop = box.scrollHeight;
        }

        function openDrawer() {
            document.getElementById('drawer').classList.add('open');
            document.getElementById('drawer-mask').style.display = 'block';
        }

        function closeDrawer() {
            document.getElementById('drawer').classList.remove('open');
            document.getElementById('drawer-mask').style.display = 'none';
        }

        function focusSearch() {
            document.getElementById('search-inp').focus();
        }

        function openSettings() {
            closeDrawer();
            document.getElementById('set-msg').innerText = '';
            document.getElementById('settings-modal').style.display = 'flex';
        }

        function closeSettings() {
            document.getElementById('settings-modal').style.display = 'none';
        }

        function saveUsername() {
            const val = document.getElementById('new-u-inp').value.trim();
            if (val) socket.emit('change-username', { newUsername: val });
        }

        function savePassword() {
            const oldPassword = document.getElementById('old-p-inp').value;
            const newPassword = document.getElementById('new-p-inp').value;
            socket.emit('change-password', { oldPassword, newPassword });
        }

        socket.on('username-updated', ({ newUsername }) => {
            myUsername = newUsername;
            document.getElementById('top-my-avatar').innerText = myUsername[0];
            document.getElementById('d-avatar').innerText = myUsername[0];
            document.getElementById('d-name').innerText = myUsername;
        });

        socket.on('settings-msg', (res) => {
            const el = document.getElementById('set-msg');
            el.style.color = res.ok ? '#2ebd85' : '#ff5252';
            el.innerText = res.msg;
        });

        function logout() {
            socket.emit('auth-logout');
            localStorage.removeItem('ext_token');
            location.reload();
        }

        function getPeer(target) {
            if (peer) return peer;
            peer = new RTCPeerConnection(iceConfig);

            peer.ontrack = (e) => {
                const vbox = document.getElementById('video-box');
                const vid = document.getElementById('remote-vid');
                vid.srcObject = e.streams[0];
                vbox.style.display = 'block';
                e.track.onended = () => { vbox.style.display = 'none'; };
            };

            peer.onicecandidate = (e) => {
                if (e.candidate) {
                    socket.emit('signal', { targetUser: target, signal: { type: 'candidate', candidate: e.candidate } });
                }
            };

            return peer;
        }

        async function toggleScreenshare() {
            if (!activeTarget) return;
            const btn = document.getElementById('ss-btn');
            const vbox = document.getElementById('video-box');

            if (!localStream) {
                try {
                    localStream = await navigator.mediaDevices.getDisplayMedia({
                        video: { width: { ideal: 1280 }, height: { ideal: 720 }, frameRate: { ideal: 30, max: 60 } },
                        audio: true
                    });

                    document.getElementById('remote-vid').srcObject = localStream;
                    vbox.style.display = 'block';

                    const p = getPeer(activeTarget);
                    localStream.getTracks().forEach(t => p.addTrack(t, localStream));

                    const offer = await p.createOffer();
                    await p.setLocalDescription(offer);
                    socket.emit('signal', { targetUser: activeTarget, signal: { type: 'offer', sdp: offer } });

                    localStream.getVideoTracks()[0].onended = () => {
                        stopScreenshare();
                    };

                    btn.classList.add('active');
                    btn.innerText = 'Stop Share';
                } catch (err) {}
            } else {
                stopScreenshare();
            }
        }

        function stopScreenshare() {
            if (localStream) {
                localStream.getTracks().forEach(t => t.stop());
                localStream = null;
            }
            document.getElementById('video-box').style.display = 'none';
            const btn = document.getElementById('ss-btn');
            btn.classList.remove('active');
            btn.innerText = 'Screenshare';
        }

        socket.on('signal', async ({ sender, signal }) => {
            const p = getPeer(sender);
            if (signal.type === 'offer') {
                await p.setRemoteDescription(new RTCSessionDescription(signal.sdp));
                const answer = await p.createAnswer();
                await p.setLocalDescription(answer);
                socket.emit('signal', { targetUser: sender, signal: { type: 'answer', sdp: answer } });
            } else if (signal.type === 'answer') {
                await p.setRemoteDescription(new RTCSessionDescription(signal.sdp));
            } else if (signal.type === 'candidate') {
                await p.addIceCandidate(new RTCIceCandidate(signal.candidate));
            }
        });
    </script>
</body>
</html>
