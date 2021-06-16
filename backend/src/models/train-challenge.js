const mongoose = require('mongoose');

const Challenge = require('./challenge');

const TrainChallengeSchema = new mongoose.Schema({
  challengeType: String,
  description: String,
  isSucceed: Boolean,
});

module.exports = Challenge.discriminator('TrainChallenge', TrainChallengeSchema);
