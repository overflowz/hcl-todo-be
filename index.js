const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const ExpressHandler = require('./handlers/express');

const generalErrorHandler = err => {
  console.error(err);
  process.exit(-1);
};

['uncaughtException', 'unhandledRejection']
  .forEach(evt => process.on(evt, generalErrorHandler));

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// optional.
app.use(express.static(path.join(__dirname, 'public')));

if (config.server.enableCors) {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });
}

const handler = new ExpressHandler(app);
handler.setupRoutes();

const listener = app.listen(config.server.port, _ => {
  console.log(`http api serving on ${listener.address().port}`);
});
