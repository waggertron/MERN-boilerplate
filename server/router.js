// const morgan = require('morgan');
const expressRouter = require('express').Router;
const passport = require('passport');
const Account = require('./models/AccountModel.js');

const router = expressRouter();

// router.use(morgan('combined'));

router.post('/signup', (req, res, next) => {
  Account.register(
    new Account({ username: req.body.username }),
    req.body.password, (err, account) => {
      if (err) {
        // return res.render('register', { error: err.message });
        res.send('error creating account: ' + err);
      }
      passport.authenticate('local')(req, res, () => {
        req.session.save((error) => {
          if (error) {
            return next(error);
          }
          // res.redirect('/');
          res.json(account);
        });
      });
    });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.redirect('/');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/ping', (req, res) => {
  res.status(200).send('pong!');
});





module.exports = router;
