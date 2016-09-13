var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;

var port = process.env.PORT || 3001;
var host = process.env.HOST || '127.0.0.1';

var myServer = new WebSocketServer({ port: port, host: host });

myServer.on('connection', function (socket) {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send('hello');
    }
    socket.on('message', function (message) {
        socket.send(message);
    });
});
