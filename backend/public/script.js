
const socket = io('/');

let myStream;
let myId;
const videoHome = document.getElementById('video-home');
const myVid = document.createElement('video');
myVid.muted = true;
console.log('Hello')

let peer = new Peer(undefined, {
    path: '/peerjs',
    host: '/',
    port: '443'
})

function addVideoStream(vidHome, stream){
    vidHome.srcObject = stream;
    vidHome.addEventListener('loadedmetadata', ()=>{
        vidHome.play();
        videoHome.appendChild(vidHome)
    })
}


// Docs recommended putting call reception here,
// But I realised I have to reload to send my stream.
// To be fixed
navigator.mediaDevices.getUserMedia({ video: true, audio: true})
.then((stream)=>{
    myStream = stream;
    myVid.classList.add('mine')
    addVideoStream(myVid, myStream);
    peer.on('call', (call)=>{
        call.answer(stream)
        const video = document.createElement('video');
        call.on('stream', (otherStream)=>{
            addVideoStream(video, otherStream)
        })
    })

    socket.on("user-connected", (userId) => {
        connectToNew(userId, stream);
        socket.on("user-left", (id)=>removeMe(id))
    });

})

const connectToNew = (userId, stream) => {
    const call = peer.call(userId, stream)
    const video = document.createElement('video')
    video.setAttribute('id', userId)
    call.on('stream', (stream)=>{
        addVideoStream(video, stream)
    })
}

const removeMe = (userId) => {
  const me = document.getElementById(userId)
  me.parentNode.removeChild(me)
}

peer.on("open", (id) => {
    socket.emit("join-room", roomId, id);
    myId = id
});

peer.on("close", ()=>{
  socket.emit("left", myId)
})

const inviteButton = document.querySelector("#inviteButton");
const muteButton = document.querySelector("#muteButton");
const stopVideo = document.querySelector("#stopVideo");
const close = document.querySelector("#close");

close.addEventListener("click", function(){
  peer.destroy()
  window.location.href = '/'
})

muteButton.addEventListener("click", () => {
  const enabled = myStream.getAudioTracks()[0].enabled;
  if (enabled) {
    myStream.getAudioTracks()[0].enabled = false;
    html = `<i class="fa fa-microphone-slash"></i>`;
    muteButton.classList.toggle("background__red");
    muteButton.innerHTML = html;
  } else {
    myStream.getAudioTracks()[0].enabled = true;
    html = `<i class="fa fa-microphone"></i>`;
    muteButton.classList.toggle("background__red");
    muteButton.innerHTML = html;
  }
});

stopVideo.addEventListener("click", () => {
  const enabled = myStream.getVideoTracks()[0].enabled;
  if (enabled) {
    myStream.getVideoTracks()[0].enabled = false;
    html = `
    <span class="fa-stack fa-2x">
      <i class="fas fa-camera fa-stack-1x"></i>
      <i class="fas fa-ban fa-stack-2x" style="color:Tomato"></i>
    </span>
    `
    stopVideo.classList.toggle("background__red");
    stopVideo.innerHTML = html;
  } else {
    myStream.getVideoTracks()[0].enabled = true;
    html = `<i class="fa fa-video-camera"></i>`;
    stopVideo.classList.toggle("background__red");
    stopVideo.innerHTML = html;
  }
});

inviteButton.addEventListener("click", (e) => {
  prompt(
    "Copy this link and send it to people you want to meet with",
    window.location.href
  );
});

window.addEventListener('beforeunload', function (e) {
  let socket = io()
  socket.emit('sha');
  e.returnValue = ''
});
