class Emission {
  static carEmissionCoefficient = 100;
  static trainEmissionCoefficient = 40;
  static bikeEmissionCoefficient = 5;
  totalEmission = [];

  calculateBikeEmission(bikeDistance) {
    return Emission.bikeEmissionCoefficient * bikeDistance;
  }
  calculateTrainEmission(trainDistance) {
    return Emission.trainEmissionCoefficient * trainDistance;
  }
  calculateCarEmission(carDistance) {
    return Emission.carEmissionCoefficient * carDistance;
  }

  calculateTotalEmission(dailyTravel) {
    return {
      'Total mobility emission':
        this.calculateBikeEmission(dailyTravel.bikeDistance) +
        this.calculateTrainEmission(dailyTravel.trainDistance) +
        this.calculateCarEmission(dailyTravel.carDistance),
    };
  }

  calculateDailyTotalEmission(dailyTravel) {
    return {
      'bike emission': this.calculateBikeEmission(dailyTravel.bikeDistance),
      'train emission': this.calculateTrainEmission(dailyTravel.trainDistance),
      'car emission': this.calculateCarEmission(dailyTravel.carDistance),
    };
  }

  storeTotalEmission(dailyTravel) {
    this.totalEmission.push(this.calculateTotalEmission(dailyTravel));
  }
}

module.exports = Emission;
