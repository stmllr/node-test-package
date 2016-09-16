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
            var data = 'This is a message';
            ws.send(data);
            var counter = 0;
            ws.on('message', function(message) {
                counter++;
                if (counter === 1) {
                    // first time the server sends a hello (this is not a required test)
                    assert.equal('hello', message);
                } else {
                    // message should be the same as sent
                    assert.equal(data, message);
                }
            });
            setTimeout(function(){
                assert.equal(counter, 2, 'Server did not respond 2 times in 500 ms')
                   done();
                   ws.close();
            },500);
        });

    });
});

function randomPort() {
    return Math.floor(Math.random() * (65535 - 3000 + 1)) + 3000;
}
