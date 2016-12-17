const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const router = require('./router');
const bodyParser = require('body-parser');
const serverConfig = require('./serverConfig.js');
const dbConfig = require('./dbConfig.js');

// const IP = process.env.ip;
const PORT = process.env.PORT || serverConfig.port || 3000;
const DB_NAME = process.env.DB_NAME || dbConfig.dbName || 'myappdatabase';
const DBURI = process.env.DBURI ||  || `mongodb://localhost/${DB_NAME}`;

function startServer(app) {
  app.use(express.static(path.join(__dirname, './../web/')));
  app.use(bodyParser.json());
  app.use('/', router);
  app.listen(PORT, () => process.stdout.write(`Server listening on port ${PORT}\n`));
}

function handleExit() {
  mongoose.connection.close(() => {
    process.stdout.write(`Mongoose default connection with DB: ${DB_NAME} is disconnected through app termination\n`);
    process.exit(0);
  });
}

mongoose.connection.on('connected', () => {
  process.stdout.write(`Connected to ${DB_NAME} DB!\n`);
  const app = express();
  startServer(app);
});
// On connection error
mongoose.connection.on('error', (err) => {
  console.error(`Failed to connect to DB ${DB_NAME} on startup\n`, err);
});

// On disconnection
mongoose.connection.on('disconnected', () => {
  process.stdout.write(`Mongoose default connection to DB: ${DB_NAME} disconnected\n`);
});

process.on('SIGINT', handleExit).on('SIGTERM', handleExit);

try {
  mongoose.connect(DBURI);
  process.stdout.write(`Trying to connect to DB ${DB_NAME}\n`);
} catch (err) {
  process.stdout.write(`Server initialization failed ${err.message}\n`);
}


