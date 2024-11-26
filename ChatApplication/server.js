const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

// Catch-all route to serve the index.html for any path
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    console.log('New user connected');

    // Join the room when the user connects
    socket.on('join_room', (room) => {
        if (!room) {
            console.error('No room specified');
            return;
        }
        console.log(`User joined room: ${room}`);
        socket.join(room);
        socket.emit('chat_message', `You have joined the ${room} chat.`);
    });

    // Listen for incoming chat messages and broadcast them to the room
    socket.on('chat_message', (msg) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
    
        // Split the message into words and add each word on a new line
        const words = msg.split(' ');
        words.forEach((word) => {
            const wordSpan = document.createElement('span');
            wordSpan.textContent = word;
            wordSpan.style.display = 'block'; // Ensure each word is on a new line
            messageDiv.appendChild(wordSpan);
        });
    
        document.getElementById('messages').appendChild(messageDiv);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    // Error handling for socket
    socket.on('error', (err) => {
        console.error('Socket error:', err);
    });
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
