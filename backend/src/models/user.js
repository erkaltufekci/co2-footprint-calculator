/* eslint-disable no-undef */

const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
// eslint-disable-next-line no-unused-vars
const passportLocalMongoose = require('passport-local-mongoose');

const EmissionSchema = require('./emission');
const CarChallenge = require('./train-challenge');
const TrainChallenge = require('./car-challenge');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // email: {
  //   type: String,
  //   unique: true,
  //   required: true,
  // },
  target: Number,
  sendedChallenges: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Challenge',
      // autopopulate: true,
    },
  ],
  receivedChallenges: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Challenge',
    // autopopulate: true,
  },
  acceptedChallenges: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Challenge',
    // autopopulate: true,
  },
  rejectedChallenges: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Challenge',
    // autopopulate: true,
  },
  notification: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Challenge',
    // autopopulate: true,
  },
  dailyTravel: {
    bikeDistance: Number,
    trainDistance: Number,
    carDistance: Number,
  },
  emission: {
    type: EmissionSchema,
    default: {},
  },
});

class User {
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
UserSchema.loadClass(User);
UserSchema.plugin(autopopulate);
UserSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
});

module.exports = mongoose.model('User', UserSchema);
