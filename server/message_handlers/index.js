const FilmModel = require('../db_models/film');

const filmsWatchers = new Map();

function subscribeToNewFilms(wss, ws) {
  if (filmsWatchers.get(ws.uniqueId) !== undefined) {
    filmsWatchers.delete(ws.uniqueId);
  }

  // Set the change stream
  filmsWatchers.set(
    ws.uniqueId,
    FilmModel.watch([
      {
        $match: { operationType: 'insert' } // Only watch insertions
      }
    ])
  );
  filmsWatchers.get(ws.uniqueId).on('change', change => {
    console.log('only print if it is subscribed');
    const { _id, name, tomatometer, grossing } = change.fullDocument;
    ws.send(
      JSON.stringify({
        data: { _id, name, tomatometer, grossing },
        type: 'newFilms'
      })
    );
  });
}

function unsubscribeToNewFilms(wss, ws) {
  const changeStream = filmsWatchers.get(ws.uniqueId);
  if (changeStream === undefined) {
    return;
  }

  // Close the connection
  changeStream.close();

  // Delete it
  filmsWatchers.delete(ws.uniqueId);
}

module.exports = {
  subscribeToNewFilms,
  unsubscribeToNewFilms
};
