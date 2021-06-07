/* eslint-disable no-console */
class Challenge {
  constructor(inviter, invitee = '') {
    this.inviter = inviter;
    this.invitee = invitee;
    this.date = new Date();
    this.id = '';
  }

  challengeInfo() {
    console.log(this.description);
  }
}

module.exports = Challenge;
