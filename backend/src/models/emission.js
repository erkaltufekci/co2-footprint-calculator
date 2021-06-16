const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');

const EmissionSchema = new mongoose.Schema({
  totalEmission: [
    {
      type: Number,
      ref: 'Emission',
      // autopopulate: true,
    },
  ],
});
class Emission {
  get carEmissionCoefficient() {
    return 100;
  }

  get trainEmissionCoefficient() {
    return 40;
  }

  get bikeEmissionCoefficient() {
    return 5;
  }

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
EmissionSchema.loadClass(Emission);
EmissionSchema.plugin(autopopulate);

module.exports = EmissionSchema;
