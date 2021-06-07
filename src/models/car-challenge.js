const Challenge = require('./challenge');

class CarChallenge extends Challenge {
  constructor(inviter, invitee) {
    super(inviter, invitee);
    this.type = 'Car Challenge';
    this.description = 'Carless Week';
    this.isSucceed = false;
  }
}
module.exports = CarChallenge;
