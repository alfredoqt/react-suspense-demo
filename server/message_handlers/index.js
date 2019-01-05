const FilmModel = require('../db_models/film');

const filmsWatchers = new Map();

function subscribeToNewFilms(wss, ws) {
  if (filmsWatchers.get(ws.uniqueId) !== undefined) {
    filmsWatchers.delete(ws.uniqueId);
  }

  const changeStream = FilmModel.watch([
    {
      $match: { operationType: 'insert' } // Only watch insertions
    }
  ]);

  // Set the change stream
  filmsWatchers.set(ws.uniqueId, changeStream);

  changeStream.on('change', change => {
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

async function unsubscribeToNewFilms(wss, ws) {
  console.log('Unsubscribe?');
  const changeStream = filmsWatchers.get(ws.uniqueId);
  if (changeStream === undefined) {
    return;
  }

  // Delete it
  filmsWatchers.delete(ws.uniqueId);

  // Close the connection
  await changeStream.close();
}

module.exports = {
  subscribeToNewFilms,
  unsubscribeToNewFilms
};
