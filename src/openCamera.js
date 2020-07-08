function openCamera() {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true})
    .then(stream => {
        const video = document.getElementById('localStream');
        video.srcObject = stream;
        video.onloadedmetadata = () => {video.play()};
    })
    .catch(error => console.log(error));
}

module.exports = openCamera;
