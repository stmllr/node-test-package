process.env.PORT = randomPort();
process.env.HOST = '127.0.0.1';

var assert = require('assert');
var webSocket = require('ws');
var webSocketServer = require('../app.js');

var url = 'ws://' + process.env.HOST + ':' + process.env.PORT;

function waitUntil (predicate, cb) {
    let received = [];
    return message => {
        received.push(message);
        if (predicate(received.slice())) {
            cb(received);
        }
    };
}

describe('Websocket Server', function() {
    it('should echo a message', function(done) {
        var ws = new webSocket(url);
        var data = 'This is a message';
        ws.on('open', function () {
            ws.on('message', waitUntil(
                messages => messages.pop() === data,
                messages => {
                    assert.equal(messages.pop(), data);
                    ws.close();
                    done();
                })
            );
            ws.send(data);
        });
    });
});

function randomPort() {
    return Math.floor(Math.random() * (65535 - 3000 + 1)) + 3000;
}
