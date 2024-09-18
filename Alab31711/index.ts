// @ts-check

class Vehicle {
  status: string = "stopped";
  make: string;
  model: string;
  wheels: number | string;

  constructor(make: string, model: string, wheels: number | string) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  start() {
    this.status = "started";
  }

  stop() {
    this.status = "stopped";
  }
}

class Car extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, "four");
  }
}

class MotorCycle extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 2);
  }
}

function printStatus(vehicle: Vehicle) {
  if (vehicle.status === "started") {
    console.log("The vehicle is running.");
  } else {
    console.log("The vehicle is stopped.");
  }
}

const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase()); // Corrected 'toUpperCase()' method

const myBuick = new Car("Buick", "Regal");
myBuick.wheels = (Number(myBuick.wheels) || 0) - 1; // Safe type conversion
console.log(myBuick.wheels); // Prints the updated wheel count
// Removed incorrect 'mdl' property access
