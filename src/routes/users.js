var express = require('express');
var router = express.Router();
const User = require('../models/user');

let serhat = new User('serhat', 'serhat@serhat.de');
serhat.driveCar(30);
serhat.getOnTrain(20);
serhat.rideBike(100);
let result = serhat.emission.calculateTotalEmission(serhat.dailyTravel);
const users = [serhat];

/* GET users listing. */
router.get('/', function (req, res, next) {
  // if (req.query.name) {
  //   return res.send(users.find(user => user.name == req.query.name));
  // }
  res.send(result);
});

router.get('/:userId', function (req, res, next) {
  const user = users[req.params.userId];
  if (user) res.send(user);
  else res.sendStatus(404);
});

module.exports = router;
