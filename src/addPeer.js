import playVideo from './playVideo';
import openStream from './openStream';
import Peer from 'simple-peer';
import $ from 'jquery';

function addPeer() {
    openStream()
    .then(stream => {
        playVideo(stream, 'localStream');
        const peer = new Peer({
            initiator: location.hash === '#1',
            trickle  : false,
            stream
        });

        peer.on('signal', token => {
            $('#mySignalTxt').val(JSON.stringify(token));
        });

        // peer.on('connect', () => {
        //     setInterval(() => peer.send(Math.random()), 1000);
        // });

        peer.on('stream', friendStream => {
            playVideo(friendStream, 'friendStream');
        });

        $('#connectBtn').click(() => {
            const friendSignal = JSON.parse(
                $('#friendSignal').val()
            );
            peer.signal(friendSignal);
        });
    })
    .catch(error => console.log(error));
}

export default addPeer;
