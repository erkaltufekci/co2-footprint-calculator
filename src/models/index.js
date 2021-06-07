/* eslint-disable no-console */
const User = require('./user');

const serhat = new User('Serhat', 'serhat@serhat.de');
const ahmet = new User('Ahmet', 'ahmet@ahmet.de');

serhat.driveCar(30);
serhat.getOnTrain(10);
serhat.rideBike(100);

ahmet.getOnTrain(25);
ahmet.rideBike(80);

serhat.emission.storeTotalEmission(serhat.dailyTravel);
ahmet.emission.storeTotalEmission(ahmet.dailyTravel);
serhat.emission.calculateTotalEmission(serhat.dailyTravel);

// serhat.lookChallenge('car');
serhat.inviteForChallenge('car', ahmet);
console.log(serhat.sendedChallenges);
console.log(ahmet.receivedChallenges);

// console.log(serhat.emission.calculateTotalEmission(serhat.dailyTravel));

// console.log(serhat.emission.totalEmission);
// console.log(ahmet.emission.totalEmission);
