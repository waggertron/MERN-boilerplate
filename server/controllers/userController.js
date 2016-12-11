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
  bcrypt.compare(suppliedPassword, password, (err, result) => {
    console.log('result from bcrypt compare', result);
    if (result) {
      return result;
    }
    return false;
  });
};

userController.createUser = (req, res, next) => {
  const newUser = makeUser(req.body.username, req.body.password, req.body.email);
  newUser.save((err, user) => {
    if (err) {
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
  const email = emailChecker.test(req.body.identifier);
  if (email) {
    User.findOne({ email: req.body.identifier }, (err, user) => {
      if (err) {
        return res.json({ err });
      }
      const valid = comparePassword(req.body.password, user.password);
      if (valid) {
        res.locals.user = {
          username: user.username,
          id: user.id,
        };
        return next();
      }
      return res.json({ err: 'that username and/or password does not match our records' });
    });
  }
};

module.exports = userController;
