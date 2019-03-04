'use-stric'
const express = require('express')
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);

class serverNotification {
    constructor(port = 3000){
        
        // Socket functions \\
        io.sockets.on('connection', function(socket) {
        
            console.log('in',socket.id)
            
            socket.on('disconnect', () => {
                console.log('out',socket.id)
            })
        
        });

        http.listen(port, () => console.info('serverNotification','lisent in port ',port));
    }

    auth(){
        io.use( async (socket,next) =>  console.log('mmiddelwhere') )
    }

    on_connection(){
        
    }
}

module.exports = serverNotification;


  

