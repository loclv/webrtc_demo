const playVideo = require('./playVideo');

function openSteam() {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true})
    .then(stream => playVideo(stream, 'localStream'))
    .catch(error => console.log(error));
}

module.exports = openSteam;
