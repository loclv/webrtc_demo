function playVideo(stream, viewStreamId) {
    const video = document.getElementById(viewStreamId);
    video.srcObject = stream;
    video.onloadedmetadata = () => {video.play()};
}

module.exports = playVideo;
