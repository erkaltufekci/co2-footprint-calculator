/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
const User = require('./user');

const serhat = new User('Serhat', 'serhat@serhat.de');
const ahmet = new User('Ahmet', 'ahmet@ahmet.de');

serhat.driveCar(30);
serhat.getOnTrain(10);
serhat.rideBike(100);

ahmet.getOnTrain(25);
ahmet.rideBike(80);

// serhat.emission.storeTotalEmission(serhat.dailyTravel);
// ahmet.emission.storeTotalEmission(ahmet.dailyTravel);
serhat.receiveTotalEmission();

// eslint-disable-next-line no-console
console.log(serhat.receiveEmissionResult());

// console.log(serhat.emission.totalEmission);
// console.log(ahmet.emission.totalEmission);
