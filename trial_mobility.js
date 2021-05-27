class Mobility {
  calcVehicleCO2(vehicle) {
    return this.vehicle.distance * this.vehicle.coefficient;
  }
}

class Car extends Mobility {
  constructor(distance) {
    super();
    this.distance = distance;
    this.coefficient = 100;
  }
}

class Train extends Mobility {
  constructor(distance) {
    super();
    this.distance = distance;
    this.coefficient = 40;
  }
}

class Bike extends Mobility {
  constructor(distance) {
    super();
    this.distance = distance;
    this.coefficient = 5;
  }
}

const myCar = new Car(50);
console.log(myCar);
const myTrip = new Mobility();
console.log(myTrip.calcVehicleCO2(myCar));
