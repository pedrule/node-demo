var express = require('express');
var app = express();
var http = require('http').Server(app)
var io = require('socket.io')(http);

app.use('/assets', express.static('distFront/assets'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/distFront/index.html');
});

app.get('/mobile', function(req, res){
    res.sendFile(__dirname + '/distMobile/index.html');
});

app.get('/front.bundle.js', function(req, res){
    res.sendFile(__dirname + '/distFront/front.bundle.js');
});

app.get('/mobile.bundle.js', function(req, res){
    res.sendFile(__dirname + '/distMobile/mobile.bundle.js');
});

// let mobile = io.of('/mobile');

// mobile.on('connection', (socket)=>{
//     console.log('a user connected as '+socket.id);
//     socket.on('newUserName', (name)=>{
//         console.log('a user is disconnected' + name);
//         socket.broadcast.emit('new-user', name);
//     });

//     socket.on('disconnected', () => {
//         console.log('user disconnected non dun epipe')
//         socket.broadcast.emit('disconnected', socket.id);
//     })
//     socket.on('init-event', ()=>{
//         console.log('init event');
//     });

//     socket.on('before-event', ()=>{
//         console.log('before event');
//         socket.emit('call-forward')
//     });

//     socket.on('after-event', ()=>{
//         console.log('after event');
//     })
// })

io.on('connection', function(socket){
    console.log('a user master connected as '+socket.id);
    socket.on('newUserName', (name)=>{
        console.log('a user is disconnected' + name);
        socket.broadcast.emit('new-user', {name, id: socket.id});
    });
    socket.on('disconnect', ()=>{
        console.log('a user is disconnected of master');
        socket.broadcast.emit('remove-user', socket.id);
    });

    socket.on('message', (message) => {
        console.log(message);
        socket.broadcast.emit('message', { message, id: socket.id });
    });
});

http.listen(1813, function(){
    console.log('listening on *:1813');
});