const User = require('./../models/UserModel.js');
const bcrypt = require('bcryptjs');

const userController = {};
const emailChecker = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const emailValid = email => emailChecker.test(email);

const makeUser = (username, password, email) => {
  if (email && emailValid(email)) {
    return new User({
      username,
      password,
      email,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return new User({
    username,
    password,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};

const comparePassword = (suppliedPassword, password) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(suppliedPassword, password, (err, result) => {
      console.log('result from bcrypt compare', result);
      if (result) {
        resolve(result);
      } else {
        reject(err);
      }
    });
  });
};

userController.createUser = (req, res, next) => {
  console.log('in create user');
  const newUser = makeUser(req.body.username, req.body.password, req.body.email);
  newUser.save((err, user) => {
    if (err) {
      console.log(err.message);
      if (err.code === 11000) {
        return res.status(409).json({
          error: `Username: ${req.body.username} is taken`,
        });
      }
      return res.json({ error: err });
    }
    res.locals.user = {
      username: user.username,
      id: user.id,
    };
    console.log('user id in user save', user.id);
    next();
  });
};

userController.verifyUser = (req, res, next) => {
  console.log('in verify user');
  const email = emailChecker.test(req.body.identifier);
  if (email) {
    User.findOne({ email: req.body.identifier }, 'password, id', (err, user) => {

      if (err) {
        console.log('no matching user', err.message);
        return res.json({ err });
      }
      if (!user) {
        return res.json({ err: 'that username and/or password does not match our records' });
      }
      comparePassword(req.body.password, user.password)
        .then((result) => {
          res.locals.user = {
            username: user.username,
            id: user.id,
          };
          console.log('user verified');
          console.log('result resolved from compare', result);
          return next();
        })
        .catch((err) => {
          return res.json({ error: 'that username and/or password does not match our records' });
        });
    });
  } else {
    console.log('identifier: ', req.body.identifier);
    User.findOne({ username: req.body.identifier }, (err, user) => {
      console.log('err in verify user', err);
      console.log('user in verify user', user);
      if (err) {
        console.log('err finding username', err.message);
        // change this with specified response
        return res.json({ error: err.message });
      }
      if (!user) {
        return res.status(400).json({ error: 'that username and/or password does not match our records' });
      }
      console.log(user);
      comparePassword(req.body.password, user.password)
        .then((result) => {
          return next();
        })
        .catch((err) => {
        });
    });
  }
};

module.exports = userController;
