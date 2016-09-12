var assert = require('assert');
var webSocket = require('ws');
var webSocketServer = require('../app.js');

var url = 'ws://127.0.0.1:3002';

describe('Websocket Server', function() {
  it('should accept opening and closing a connection', function(done) {
    var ws = new webSocket(url);
    ws.on('open', function () {
      ws.close();
      ws.on('close', function () {
        done();
      });
    });
  });

  it('should echo a message', function(done) {
    var ws = new webSocket(url);
    ws.on('open', function () {
      var data = '{"hello":"world"}';
      ws.send(data);
      ws.on('message', function(message) {
        assert.equal(data, message);
        done();
        ws.close();
      });
    });
  });
});
