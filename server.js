/**
 * Created by vison on 17/7/16.
 */
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 8181 });
wss.on('connection', function (ws) {
    console.log('client connected');
    ws.on('message', function (message) {
        console.log(message);
    });
});