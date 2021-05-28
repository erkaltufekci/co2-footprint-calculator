class Emitter {
  coefficient = 1;
  type = "Emitter";

  calculateEmission() {
    console.log("this method should be overridden");
  }
}

class MobilityEmitter extends Emitter {
  coefficient = 1;
  type = "Mobility";

  constructor(distance = 0) {
    super();
    this.distance = distance;
  }

  calculateEmission() {
    return this.distance * this.coefficient;
  }
}

class CarEmitter extends MobilityEmitter {
  type = "Car";
  coefficient = 100;
}

class TrainEmitter extends MobilityEmitter {
  type = "Train";
  coefficient = 40;
}

class BikeEmitter extends MobilityEmitter {
  type = "Bike";
  coefficient = 5;
}

// const myCar = new Car(50);
// console.log(myCar);
// console.log(myCar.calcVehicleCO2());
//const myTrip = new Mobility();
//console.log(myTrip.calcVehicleCO2(myCar));

class LivingSpaceEmitter extends Emitter {
  coefficient = 5;
  type = "LivingSpace";

  constructor(size) {
    super();

    this.size = size;
  }

  calculateEmission() {
    return this.size * this.coefficient;
  }
}

class HouseEmitter extends LivingSpaceEmitter {
  type = "House";

  constructor(size, residents) {
    super(size);

    this.residents = residents;
  }

  calculateEmission() {
    return (this.size * this.coefficient) / this.residents;
  }
}

// const myHouse = new House(50, 2);
// console.log(myHouse.calcHouseCO2());

class FoodEmitter extends Emitter {
  coefficient = 1;
  constantEmission = 100;
  dairyCoefficient = 1;
  dairyConsumption = 0;
  meatCoefficient = 1;
  meatConsumption = 0;
  type = "Food";

  calculateEmission() {
    return (
      this.constantEmission * this.coefficient +
      this.dairyConsumption * this.dairyCoefficient +
      this.meatConsumption * this.meatCoefficient
    );
  }
}

class VeganEmitter extends FoodEmitter {
  type = "Vegan";
}

class VegetarianEmitter extends FoodEmitter {
  dairyCoefficient = 10;
  coefficient = 0.75;
  type = "Vegetarian";

  constructor(dairyConsumption) {
    super();
    this.dairyConsumption = dairyConsumption;
  }
}

class MixedEmitter extends FoodEmitter {
  dairyCoefficient = 10;
  meatCoefficient = 20;
  coefficient = 0.5;
  type = "Mixed";

  constructor(dairyConsumption, meatConsumption) {
    super();
    this.dairyConsumption = dairyConsumption;
    this.meatConsumption = meatConsumption;
  }
}

const veganEmitter = new VeganEmitter();
const houseEmitter = new HouseEmitter(100, 3);
const carEmitter = new CarEmitter(30);

const myConsumption = [veganEmitter, houseEmitter, carEmitter];

function printTotalEmission() {
  const total = myConsumption
    .map((c) => c.calculateEmission())
    .reduce((a, b) => a + b);

  myConsumption.forEach((c) => {
    console.log(`Type: ${c.type}, Emission: ${c.calculateEmission()}`); // Polymorphism
  });
  console.log("--------");
  console.log("Total emission: " + total);
}

printTotalEmission();
