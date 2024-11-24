const socket = io();
let currentRoom = ''; // To track the current room the user is in

// Automatically join room based on URL on page load
window.onload = () => {
    const path = window.location.pathname;
    if (path === '/workingchat') {
        currentRoom = 'work';
        socket.emit('join_room', 'work');
    } else if (path === '/justforchat') {
        currentRoom = 'general';
        socket.emit('join_room', 'general');
    }
};

// When the "Working Chat" button is clicked
document.getElementById('working-chat').addEventListener('click', () => {
    currentRoom = 'work';
    socket.emit('join_room', 'work');  // Emit join room event
    document.getElementById('messages').innerHTML = '';  // Clear messages
    console.log("Joined 'Work' chat");

    // Update the URL
    history.pushState(null, '', '/workingchat'); // Update the URL without reloading the page
});

// When the "Just for Chatting" button is clicked
document.getElementById('chating-chat').addEventListener('click', () => {
    currentRoom = 'general';
    socket.emit('join_room', 'general');  // Emit join room event
    document.getElementById('messages').innerHTML = '';  // Clear messages
    console.log("Joined 'General' chat");

    // Update the URL
    history.pushState(null, '', '/justforchat'); // Update the URL without reloading the page
});

// Display received message
socket.on('chat_message', (msg) => {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.textContent = msg;
    document.getElementById('messages').appendChild(messageDiv);
});

// Send message when the button is clicked
document.getElementById('send').addEventListener('click', () => {
    const message = document.getElementById('message').value;
    if (message && currentRoom) {
        socket.emit('chat_message', { message, room: currentRoom });
        document.getElementById('message').value = ''; // Clear input field
    }
});

// Send message when Enter key is pressed
document.getElementById('message').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const message = document.getElementById('message').value;
        if (message && currentRoom) {
            socket.emit('chat_message', { message, room: currentRoom });
            document.getElementById('message').value = ''; // Clear input field
        }
    }
});
