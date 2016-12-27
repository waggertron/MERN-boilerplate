const express = require('express');
const mongoose = require('mongoose');
const config = require('./configs/configController');
const { port, enviorment } = require('./configs/serverConfig.js');
const { dbName, dbUri } = require('./configs/dbConfig.js');
const socketEvents = require('./socketEvents');
const https = require('https');
const fs = require('fs');
const socketIO = require('socketio');
// const IP = process.env.ip;
const PORT = process.env.PORT || port || 3000;
const DB_NAME = process.env.DB_NAME || dbName || 'myappdatabase';
const DBURI = process.env.DBURI || dbUri || `mongodb://localhost/${DB_NAME}`;
const ENVIORMENT = enviorment || 'development';
// self signed cert
const httpsCertOptions = {
  key: fs.readFileSync('./certs/file.pem'),
  cert: fs.readFileSync('./certs/file.crt'),
};



function startServer(app) {
  app.set('env', ENVIORMENT);
  const server = https.createServer(httpsCertOptions, app);
  const io = socketIO(server);
  socketEvents(io);
  config(app);
  server.listen(PORT, () => process.stdout.write(`Server listening on port ${PORT}\n`));
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
  process.stderr.write(`\nFailed to connect to DB ${DB_NAME} on startup\n`, err);
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


