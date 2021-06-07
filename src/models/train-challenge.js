const Challenge = require('./challenge');

class TrainChallenge extends Challenge {
  constructor(inviter, invitee) {
    super(inviter, invitee);
    this.type = 'Train Challenge';
    this.description = '7 Days only Bike';
    this.isSucceed = false;
  }
}
module.exports = TrainChallenge;
