const User = require("./user");
const Mobility = require("./mobility");

const ahmet = new User("ahmet", "ahmet@ahmet.de");
const serhat = new User("Serhat", "serhat@serhat.de");

const car = new Mobility(10);

serhat.footPrintCalc(10);

console.log(car.carEmission);

console.log(serhat.footPrintCalc());
