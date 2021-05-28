const Emission = require("./emission");
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.target = 1000;
    this.dailyTravel = {
      bikeDistance: "",
      trainDistance: "",
      carDistance: "",
    };
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
    const emission = new Emission(this.dailyTravel);
    return emission.calculateDailyTotalEmission();
  }
}

module.exports = User;
