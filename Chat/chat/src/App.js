import { io } from 'socket.io-client'
import React from 'react'


const socket = io('http://localhost:4000')

function App() {
  const [message, setMessage] = React.useState('')
  const [messages, setMessages] = React.useState([])

  React.useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages((prev) => [...prev, data])
    })
  }, [])

  const sendMessage = () => {
    socket.emit('send_message', message)
    setMessage('')
  }

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
