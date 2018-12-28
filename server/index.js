const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const configureRoutes = require('./utils/configureRoutes');

const port = 4000;

mongoose
  .connect(
    'mongodb+srv://admin:admin@clustertest-wgpdz.mongodb.net/filmsapp',
    { useNewUrlParser: true }
  )
  .then(() => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());

    configureRoutes(app);

    // Error handler
    app.use((err, req, res, next) => {
      if (err instanceof Error) {
        return res
          .status(err.status || 500)
          .send({ status: err.status, message: err.message });
      }
      next(err);
    });

    app.listen(port, () => console.log(`Server listening on port ${port}`));
  })
  .catch(() => {
    console.log('Error on connection');
  });
