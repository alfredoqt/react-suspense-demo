const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const FilmRoute = require('../routes/film');

function configureExpressApp() {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

  app.use('/film', FilmRoute);

  // Error handler
  app.use((err, req, res, next) => {
    if (err instanceof Error) {
      return res
        .status(err.status || 500)
        .send({ status: err.status, message: err.message });
    }
    next(err);
  });

  return app;
}

module.exports = configureExpressApp;
