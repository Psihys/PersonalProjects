const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

const app = express()
app.use(cors())

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000', // Replace with your React app URL
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  console.log('A user connected')

  socket.on('send_message', (message) => {
    io.emit('receive_message', message) // Broadcast to all users
  })

  socket.on('disconnect', () => {
    console.log('A user disconnected')
  })
})

server.listen(4000, () => {
  console.log('Server is running on port 4000')
})
