const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const router = require('./router');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const expressSession = require('express-session');
const { port, enviorment } = require('./configs/serverConfig.js');
const { dbName, dbUri } = require('./configs/dbConfig.js');
const { secret } = require('./configs/securityConfig.js');
const Account = require('./models/AccountModel.js');

// const IP = process.env.ip;
const PORT = process.env.PORT || port || 3000;
const DB_NAME = process.env.DB_NAME || dbName || 'myappdatabase';
const DBURI = process.env.DBURI || dbUri || `mongodb://localhost/${DB_NAME}`;
const ENVIORMENT = enviorment || 'development';



function startServer(app) {
  app.set('env', ENVIORMENT);
  app.use(express.static(path.join(__dirname, './../web/')));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(expressSession({
    secret,
    resave: false,
    saveUninitialized: false,
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new LocalStrategy(Account.authenticate()));
  passport.serializeUser(Account.serializeUser());
  passport.deserializeUser(Account.deserializeUser());
  if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
      res.status(err.status || 500);
      res.send('error: ', {
        message: err.message,
        error: err,
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {},
    });
  });
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


