const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

var app = express();
var server = http.createServer(app);
var io= socketIO(server);

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
        });
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});