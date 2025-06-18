// Creating a http server using Node.js
const http = require('http').createServer()

// importing socket.io
const io = require('socket.io')(http, {
  cors: {
    origin: '*', // Allow all origins
  }
})

// 
io.on ('connection', (socket) => {
  console.log('A user connected')

  socket.on('message', (message) => {
    console.log(message)
    
    io.emit('message', `${socket.id.slice(0,2)} said ${message}`) // Broadcast the message to all connected clients
  })

})

http.listen(8080, () => console.log('listening on port http://localhost:8080')) // Start the server on port 8080
// To run this server, use the command: node index.js
