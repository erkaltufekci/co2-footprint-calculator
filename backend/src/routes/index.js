/* eslint-disable no-console */
const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});

// router.post('/', function (req, res) {
//   const user = req.body;
//   res.send(user);
// });

router.get('/user', (req, res) => {
  const user = req.body;
  console.log(user);
  res.sendStatus(200);
});

module.exports = router;
