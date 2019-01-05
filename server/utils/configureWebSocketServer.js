const WebSocket = require('ws');
const uuidv4 = require('uuid/v4');

const messageHandlers = require('../message_handlers');

function configureWebSocketServer(server) {
  const wss = new WebSocket.Server({
    server,
    clientTracking: true
  });

  function handleMessage(wss, ws, message) {
    const parsedMessage = JSON.parse(message);
    if (messageHandlers[parsedMessage.type] === undefined) {
      // TODO: Maybe send back an error
    }
    // Much cleaner way
    messageHandlers[parsedMessage.type](wss, ws, parsedMessage);
  }

  function handleConnection(ws) {
    // Assign an id to the ws client
    ws.uniqueId = uuidv4();
    ws.on('message', message => handleMessage(wss, ws, message));
  }

  wss.on('connection', handleConnection);

  return wss;
}

module.exports = configureWebSocketServer;
