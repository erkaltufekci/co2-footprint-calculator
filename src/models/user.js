/* eslint-disable no-undef */
const TrainChallenge = require('./train-challenge');
const CarChallenge = require('./car-challenge');
const Emission = require('./emission');

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.target = 1000;
    this.sendedChallenges = [];
    this.receivedChallenges = [];
    this.acceptedChallenges = [];
    this.rejectedChallenges = [];
    this.notification = [];
    this.dailyTravel = {
      bikeDistance: '',
      trainDistance: '',
      carDistance: '',
    };
    this.emission = new Emission();
  }

  driveCar(distance) {
    this.dailyTravel.carDistance = distance;
  }

  getOnTrain(distance) {
    this.dailyTravel.trainDistance = distance;
  }

  rideBike(distance) {
    this.dailyTravel.bikeDistance = distance;
  }

  receiveEmissionResult() {
    return this.emission.calculateDailyTotalEmission(this.dailyTravel);
  }

  receiveTotalEmission() {
    return this.emission.calculateTotalEmission(this.dailyTravel);
  }

  lookChallenge(challenge) {
    challenge.challengeInfo();
  }

  inviteForChallenge(type, invitee) {
    let challenge;
    if (type == 'car') {
      challenge = new CarChallenge(this, invitee);
    }

    if (type == 'train') {
      challenge = new TrainChallenge(this, invitee);
    }
    this.sendedChallenges.push(challenge);
    invitee.receivedChallenges.push(challenge);
  }

  acceptChallenge(challenge) {
    this.acceptedChallenges.push(challenge);
    challenge.inviter.notification.push('Challenge is accepted');
  }

  rejectChallenge(challenge) {
    this.rejectedChallenges.push(this.challenge);
    challenge.inviter.notification.push('Challenge is rejected');
  }
}

module.exports = User;
