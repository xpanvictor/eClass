
require('dotenv').config();
const express = require('express')
const app = express()
const server = require('http').Server(app)
const { v4: uuid4 } = require('uuid')
const { Server } = require('socket.io')
const { ExpressPeerServer } = require('peer')

const peerServer = ExpressPeerServer(server, {
    debug: true
})
const io = new Server(server)

app.use(express.static('public'))
app.set('view engine', 'ejs')

// Expose an endpoint for peerjs
app.use('/peerjs', peerServer)

// Redirect to a particular room
app.get('/', (req, res)=>{
    res.redirect(`${uuid4()}`)
})

// From req params, render for that particular room
app.use('/:roomId', (req, res)=>{
    res.render('room', {roomId: req.params.roomId})
})

io.on('connection', (socket)=>{
    socket.on('joined', (roomId, userId)=>{
        socket.join(roomId);
        socket.to(roomId).broadcast.emit('user-joined', userId)
    })
})


const PORT = process.env.PORT || 3001;

server.listen(PORT, ()=>`App listening at port ${PORT}`)
