
require('dotenv').config();
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require("socket.io")(server, {
  cors: {
    origin: '*'
  }
});

// Import database and connect
const connect = require('./database/db')
connect()

// Express peer server
const { ExpressPeerServer } = require('peer')
const peerServer = ExpressPeerServer(server, {
    debug: true
})

// Setting up the graphql api graphql
const { graphqlHTTP } = require('express-graphql')
const schema = require('./api/schema')

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

// Public folder and view engine
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

process.on('unhandledRejection', (err)=>{
    console.log(err)
})
