/* eslint-disable no-console */
const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');

const challengeSchema = new mongoose.Schema({
  inviter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  invitee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
class Challenge {
  challengeInfo() {
    console.log(this.description);
  }
}
challengeSchema.loadClass(Challenge);
challengeSchema.plugin(autopopulate);

module.exports = mongoose.model('Challenge', challengeSchema);
