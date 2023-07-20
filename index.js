class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getDescription() {
    return `The first car is a ${this.year} ${this.make} ${this.model}.`;
  }
}

const car1 = new Car(`Dodge`, `Viper GTS`, 1997);
console.log(car1.getDescription());



class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }

  getDescription() {
    return `There is an electric model of this car. The ${this.year} ${this.make} ${this.model} that gets up to ${this.range} miles on a single charge!`;
  }
}
const car2 = new ElectricCar(`Dodge`, `Viper ETS`, 1997, 1000);
console.log(car2.getDescription());


console.log(car1 instanceof Car); // Output: true
console.log(car2 instanceof ElectricCar); // Output: true
