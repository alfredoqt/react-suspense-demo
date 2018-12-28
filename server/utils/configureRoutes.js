const FilmRoute = require('../routes/film');

function configureRoutes(app) {
  app.use('/film', FilmRoute);
}

module.exports = configureRoutes;
