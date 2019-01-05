const WebSocket = require('ws');

const messageHandlers = require('../message_handlers');

function configureWebSocketServer(server) {
  const wss = new WebSocket.Server({
    server,
    clientTracking: true
  });

  function handleMessage(ws, message) {
    const parsedMessage = JSON.parse(message);
    if (messageHandlers[parsedMessage.type] === undefined) {
      // TODO: Maybe send back an error
    }
    console.log(parsedMessage.type);
    // Much cleaner way
    messageHandlers[parsedMessage.type](ws, parsedMessage);
  }

  function handleConnection(ws) {
    ws.on('message', message => handleMessage(ws, message));
  }

  wss.on('connection', handleConnection);

  return wss;
}

module.exports = configureWebSocketServer;
