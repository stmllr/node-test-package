var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;

var myServer = new WebSocketServer({ port: 3002, host: '127.0.0.1' });

myServer.on('connection', function (socket) {
    socket.on('message', function (message) {
        socket.send(message);
    });
});
