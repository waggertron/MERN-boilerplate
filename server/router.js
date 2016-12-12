
const data = require('./data.js');
const morgan = require('morgan');
const expressRouter = require('express').Router;
const userController = require('./controllers/userController.js');


const router = expressRouter();

function logger(req, res, next) {
  console.log('req recieved');
}


// router.use(morgan('combined'));

router.get('/data', (req, res) => {
  res.json(data);
});
router.post('/login', userController.verifyUser, (req, res) => {
  res.json(data);
});

router.post('/signup', userController.createUser, (req, res) => {
  res.json(data);
});



module.exports = router;
