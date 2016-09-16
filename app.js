var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;

var port = process.env.PORT || 3001;
var host = process.env.HOST || '127.0.0.1';

var myServer = new WebSocketServer({ port: port, host: host });

myServer.on('connection', function (socket) {
    if (socket.readyState === WebSocket.OPEN) {
        var welcomeMessages = ['hello', 'dear friend', 'welcome'];
        for(var i=0; i <= Math.floor(Math.random() * 3); i++) {
            socket.send(welcomeMessages[i]);
        }
    }
    socket.on('message', function (message) {
        socket.send(message);
    });
});
