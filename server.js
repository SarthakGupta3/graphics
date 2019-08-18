const express = require('express');
const path = require('path');

const socket = require('socket.io');

const app = express();

app.get('/', (req,res,next) => {
    res.send('Hi');
})
app.get('/desktop', (req,res,next) => {
    res.sendFile(path.join(__dirname, 'public', 'Desktop', 'index.html'));
});

app.get('/mobile', (req,res,next) => {
    res.sendFile(path.join(__dirname, 'public', 'Mobile', 'mobile.html'));
});

let server = app.listen(8080);
const io = socket(server); 

io.on('connection', function(socket){
    socket.on('orientation',function(e){
        console.log(e);
    });
})


