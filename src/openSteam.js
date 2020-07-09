const playVideo = require('./playVideo');
const Peer = require('simple-peer');
const $ = require('jquery');

function openSteam() {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true})
    .then(stream => {
        playVideo(stream, 'localStream');
        const p = new Peer({
            initiator: location.hash === '#1',
            trickle  : false,
            stream
        });

        p.on('signal', token => {
            $('#mySignalTxt').val(JSON.stringify(token));
        });

        // p.on('connect', () => {
        //     setInterval(() => p.send(Math.random()), 1000);
        // });

        p.on('stream', friendStream => {
            playVideo(friendStream, 'friendStream');
        });

        $('#connectBtn').click(() => {
            const friendSignal = JSON.parse(
                $('#friendSignal').val()
            );
            p.signal(friendSignal);
        });
    })
    .catch(error => console.log(error));
}

module.exports = openSteam;
