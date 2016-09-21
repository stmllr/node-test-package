var WebSocket = require('ws');

var port = process.env.PORT || 3001;
var host = process.env.HOST || '127.0.0.1';

var myServer = new WebSocket.Server({ port: port, host: host });

myServer.on('connection', function (socket) {
    socket.on('message', function (message) {
        socket.send(message);
    });
});
