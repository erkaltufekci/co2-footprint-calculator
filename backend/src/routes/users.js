const express = require('express');

const router = express.Router();

const User = require('../models/user');
require('../models/emission');

/* GET users listing. */
router.get('/', async (req, res) => {
  const serhat = new User({ name: 'serhat', email: 'serhat@user.de' });
  const steve = new User({ name: 'steve', email: 'steve@user.de' });
  const john = new User({ name: 'john', email: 'john@user.de' });
  await serhat.save();
  await steve.save();
  await john.save();

  res.send(400);
});

router.get('/get', async (req, res) => {
  const result = await User.find({ name: 'serhat' });
  res.send(result);
});

router.post('/new', async (req, res) => {
  const newUser = await User.create(req.body);
  res.send(newUser);
});

module.exports = router;
