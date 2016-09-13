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
            ws.on('message', function(message) {
                /** @FIXME message event is triggered twice. We should ignore 'hello'.
                 * 
                 * The following line is a hack, but comes with a test smell:
                 * If the assertion is skipped if message does not match data,
                 * then the assertion cannot fail by definition.
                 */
                // if (message !== data) return;
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
