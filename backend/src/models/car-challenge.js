const mongoose = require('mongoose');

const Challenge = require('./challenge');

const CarChallengeSchema = new mongoose.Schema({
  challengeType: String,
  description: String,
  isSucceed: Boolean,
});

module.exports = Challenge.discriminator('CarChallenge', CarChallengeSchema);
