/* eslint-disable no-console */
const express = require('express');

const router = express.Router();
// const axios = require('axios');

const User = require('../models/user');
require('../models/emission');

router.get('/', async (req, res) => {
  const query = {};

  if (req.query.name) {
    query.name = req.query.name;
  }

  res.send(await User.find(query));
});

/* POST create a user */
router.post('/', async (req, res) => {
  const createdUser = await User.create(req.body);
  res.send(createdUser);
});

/* GET users listing. */
router.get('/init', async (req, res) => {
  const serhat = new User({ name: 'armagan', email: 'armagan@user.de' });
  const steve = new User({ name: 'thun', email: 'thun@user.de' });
  const john = new User({ name: 'ozan', email: 'ozan@user.de' });
  await serhat.save();
  await steve.save();
  await john.save();

  res.sendStatus(200);
});

router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById( req.params.userId );
    if (user) res.send(user);
    else res.sendStatus(404)
  } catch (error) { 
    console.log(error)
    res.sendStatus(500)
  }
});

router.post('/new', async (req, res) => {
  const newUser = await User.create(req.body);
  res.send(newUser);
});

module.exports = router;
