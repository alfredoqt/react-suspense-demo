const WebSocket = require('ws');

const messageHandlers = require('../message_handlers');

function configureWebSocketServer(server) {
  const wss = new WebSocket.Server({
    server,
    clientTracking: true
  });

  function handleMessage(ws, message) {
    if (messageHandlers[message.type] === undefined) {
      // TODO: Maybe send back an error
    }
    // Much cleaner way
    messageHandlers[message.type](ws, message);
  }

  function handleConnection(ws) {
    ws.on('message', message => handleMessage(ws, message));
  }

  wss.on('connection', handleConnection);

  return wss;
}

module.exports = configureWebSocketServer;
