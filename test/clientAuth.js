'use-stric'
const io = require('socket.io-client');

const socket = io('http://localhost:3001');

socket.on('connect',() => {
    console.log('connecte')
})