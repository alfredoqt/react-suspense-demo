const mongoose = require('mongoose');
const http = require('http');

const configureExpressApp = require('./utils/configureExpressApp');
const configureWebSocketServer = require('./utils/configureWebSocketServer');

const port = 4000;

mongoose
  .connect(
    'mongodb+srv://admin:admin@clustertest-wgpdz.mongodb.net/filmsapp',
    { useNewUrlParser: true }
  )
  .then(() => {
    const app = configureExpressApp();

    const server = http.createServer(app);

    configureWebSocketServer(server);

    server.listen(port, () => console.log(`Server listening on port ${port}`));
  })
  .catch(() => {
    console.log('Error on connection');
  });
