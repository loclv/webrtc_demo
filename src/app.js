const openSteam = require('./openSteam');
const Peer = require('simple-peer');
const $ = require('jquery');

// openSteam();

const p = new Peer({ initiator: location.hash === '#1', trickle: false });

p.on('signal', token => {
    $('#mySignalTxt').val(JSON.stringify(token));
});

p.on('connect', () => {
    setInterval(() => p.send(Math.random()), 1000);
});

p.on('data', data => {console.log(`received data: ${data}`);});

$('#connectBtn').click(() => {
    const friendSignal = JSON.parse(
        $('#friendSignal').val()
    );
    p.signal(friendSignal);
});

console.log('test');
