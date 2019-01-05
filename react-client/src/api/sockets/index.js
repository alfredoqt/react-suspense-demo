export function subscribeToNewFilms() {}

export function connectToWebSocketServer() {
  const socket = new WebSocket('ws://localhost:4000');
  function handleMessage() {
    // console.log(event.data);
  }

  socket.onmessage = handleMessage;
}
