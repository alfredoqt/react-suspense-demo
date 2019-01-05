function subscribeToNewFilms(ws) {
  const test = { type: 'newFilms', data: { message: 'Hey pretty' } };
  ws.send(JSON.stringify(test));
}

function unsubscribeToNewFilms(ws) {}

module.exports = {
  subscribeToNewFilms,
  unsubscribeToNewFilms
};
