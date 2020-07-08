const openSteam = require('./openSteam');
const Peer = require('simple-peer');
const $ = require('jquery');

// openSteam();

const p = new Peer({ initiator: location.hash === '#1', trickle: false });

p.on('signal', token => {
    $('#mySignalTxt').val(JSON.stringify(token));
});

p.on('connect', () => {console.log('connected!')});

$('#connectBtn').click(() => {
    const friendSignal = JSON.parse(
        $('#friendSignal').val()
    );
    p.signal(friendSignal);
});

console.log('test');
