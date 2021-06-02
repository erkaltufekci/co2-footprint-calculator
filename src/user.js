const Emission = require('./emission');
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.target = 1000;
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
}

module.exports = User;
