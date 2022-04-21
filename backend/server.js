
require('dotenv').config();
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require("socket.io")(server, {
  cors: {
    origin: '*'
  }
});
const { ExpressPeerServer } = require('peer')

const peerServer = ExpressPeerServer(server, {
    debug: true
})

app.use(express.static('public'))
app.set('view engine', 'ejs')

// Expose an endpoint for peerjs
app.use('/peerjs', peerServer)

// Redirect to a particular room
app.get('/', (req, res)=>{
    res.render('home')
})

// From req params, render for that particular room
app.use('/:roomId', (req, res)=>{
    res.render('room', {roomId: req.params.roomId})
})


io.on("connection", (socket) => {
    socket.on("join-room", (roomId, userId) => {
      socket.join(roomId);
      console.log(userId)
      socket.broadcast.emit("user-connected", userId);
      socket.on("left", (id)=>{
        console.log('left', id)
        socket.broadcast.emit("user-left", id)
      })
    });
  });
  


const PORT = process.env.PORT || 3001;

server.listen(PORT, ()=>`App listening at port ${PORT}`)
