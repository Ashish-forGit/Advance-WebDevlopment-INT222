const express = require('express')
const socketIO = require("socket.io")
const app =  express();
const path = require('path');
const { log } = require('console');

const server = app.listen(3000, ()=>{
    console.log("Server is listening at port 3000");
})

const io = socketIO(server);

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

io.on('connection', (socket)=>{
    console.log("A new User connected");

    socket.on('join', (username)=>{
        socket.username = username;
        io.emit('chat message' , {type : 'notification', message : `${username} has joined the chat` })
    });

    socket.on('chat message', (msg)=>{
        io.emit('chat message' , {type : 'message', username : socket.username, message : msg  })
    })

    socket.on('disconnect', ()=>{
        console.log("A user disconnected");
        if(socket.username){
            io.emit('chat message', {type: 'notification', message : `${socket.username} has left the chat`})
        }
    })
})