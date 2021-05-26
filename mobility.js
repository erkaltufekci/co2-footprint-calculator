class Mobility {
  constructor(distance) {
    this.distance = distance;
    this.carCO2 = 10;
  }

  get carEmission() {
    return this.carEmissionCalc();
  }

  carEmissionCalc() {
    return this.distance * this.carCO2;
  }
}

module.exports = Mobility;
