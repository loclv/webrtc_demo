function playVideo(stream) {
    const video = document.getElementById('localStream');
    video.srcObject = stream;
    video.onloadedmetadata = () => {video.play()};
}


