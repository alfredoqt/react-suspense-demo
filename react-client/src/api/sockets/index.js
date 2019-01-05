import EventEmitter from '../../utils/EventEmitter';

// I did it!
const SocketEvent = new EventEmitter();

export function subscribeToNewFilms(listener) {
  SocketEvent.addEventListener('newFilms', listener);
  SocketEvent.emit('sendMessage', { type: 'subscribeToNewFilms' });
}
export function unsubscribeToNewFilms(listener) {
  SocketEvent.removeEventListener('newFilms', listener);
  SocketEvent.emit('sendMessage', { type: 'unsubscribeToNewFilms' });
}

export function configureConnectionToWebSocketServer() {
  const socket = new WebSocket('ws://localhost:4000');

  function handleMessage(message) {
    try {
      const parsedMessage = JSON.parse(message);
      SocketEvent.emit(parsedMessage.type, parsedMessage.data);
    } catch (e) {
      // Handle this somehow
    }
  }

  // Listens to any socket messages and sends them to the server
  function publishMessage(data) {
    // Simply send the stringified data!
    socket.send(JSON.stringify(data));
  }

  SocketEvent.addEventListener('sendMessage', publishMessage);

  socket.onmessage = handleMessage;

  // TODO: Figure out if I need to remove the send message listener
}
