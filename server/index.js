const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const router = require('./router');
const bodyParser = require('body-parser');

// const IP = process.env.ip;
const PORT = process.env.PORT || 3000;
const DBSERVER = process.env.DB_ENV || 'myappdatabase';
const DBURI = process.env.DBURI || `mongodb://localhost/${DBSERVER}`;

function startServer(app) {
  app.use(express.static(path.join(__dirname, './../web/')));
  app.use(bodyParser.json());
  app.use('/', router);
  app.listen(PORT, () => process.stdout.write(`Server listening on port ${PORT}\n`));
}

function handleExit() {
  mongoose.connection.close(() => {
    process.stdout.write(`Mongoose default connection with DB: ${DBSERVER} is disconnected through app termination\n`);
    process.exit(0);
  });
}

mongoose.connection.on('connected', () => {
  process.stdout.write(`Connected to ${DBSERVER} DB!\n`);
  const app = express();
  startServer(app);
});
// On connection error
mongoose.connection.on('error', (err) => {
  console.error(`Failed to connect to DB ${DBSERVER} on startup\n`, err);
});

// On disconnection
mongoose.connection.on('disconnected', () => {
  process.stdout.write(`Mongoose default connection to DB: ${DBSERVER} disconnected\n`);
});

process.on('SIGINT', handleExit).on('SIGTERM', handleExit);

try {
  mongoose.connect(DBURI);
  process.stdout.write(`Trying to connect to DB ${DBSERVER}\n`);
} catch (err) {
  process.stdout.write(`Server initialization failed ${err.message}\n`);
}


