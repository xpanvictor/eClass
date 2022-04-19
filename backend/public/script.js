
const socket = io('/');

let myStream;
const videoHome = document.getElementById('video-home');
const myVid = document.createElement('video');
myVid.muted = true;
console.log('Hello')

let peer = new Peer(undefined, {
    path: '/peerjs',
    host: '/',
    port: '3001'
})

function addVideoStream(vidHome, stream){
    vidHome.srcObject = stream;
    vidHome.addEventListener('loadedmetadata', ()=>{
        vidHome.play();
        videoHome.appendChild(vidHome)
    })
}

navigator.mediaDevices.getUserMedia({ video: true, audio: true})
.then((stream)=>{
    myStream = stream;
    addVideoStream(myVid, myStream);
    peer.on('call', (call)=>{
        call.answer(stream)
        const video = document.createElement('video');
        call.on('stream', (otherStream)=>{
            addVideoStream(video, otherStream)
        })
    })

    socket.on('user-joined', (userId)=>{
        connectToNew(userId, stream)
    })
})

const connectToNew = (userId, stream) => {
    const call = peer.call(userId, stream)
    const video = document.createElement('video')
    call.on('stream', (stream)=>{
        addVideoStream(video, stream)
    })
}

peer.on('open', (id)=>{
    socket.emit('user-joined', roomId, id)
})
