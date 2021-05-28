const User = require('./user');

const serhat = new User('Serhat', 'serhat@serhat.de');

serhat.driveCar(30);
serhat.getOnTrain(10);
serhat.rideBike(100);

// console.log("------testing user class------");
// console.log(serhat);
// console.log(ahmet);

console.log(serhat.receiveEmissionResult());

// const car = new Mobility(10);

// serhat.footPrintCalc(10);

// console.log(car.carEmission);

// console.log(serhat.footPrintCalc(car.carEmission));
