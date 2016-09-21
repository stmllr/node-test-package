process.env.PORT = randomPort();
process.env.HOST = '127.0.0.1';

var assert = require('assert');
var webSocket = require('ws');
var webSocketServer = require('../app.js');

var url = 'ws://' + process.env.HOST + ':' + process.env.PORT;

describe('Websocket Server', function() {
    it('should echo a message', function(done) {
        var ws = new webSocket(url);
        ws.on('open', function () {
            var data = 'unique_message_f1ea7ee5-7a36-4586-a799-a7ae50fe6c55';
            ws.send(data);
            ws.on('message', function(message) {
                assert.equal(data, message);
                done();
                ws.close();
            });
        });
    });
});

function randomPort() {
    return Math.floor(Math.random() * (65535 - 3000 + 1)) + 3000;
}
