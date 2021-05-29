"use strict";
// Реализовать иерархию  ПассажирскийТранспорт=>ТранспортноеСредство (3-4 свойства, 1-2 метода)
//                           ГрузовойТранспорт=>ТранспортноеСредство.

class Vehicle {
  constructor(brand, weight, clearance, fuelConsumption) {
    this.brand = brand;
    this.weight = weight;
    this.clearance = clearance;
    this.fuelConsumption = fuelConsumption;
  }
  fuelNeeded(km) {
    return this.fuelConsumption * (km / 100);
  }
  getVehicleInfo() {
    console.log(
      `${this.brand}: weigh - ${this.weight}kg, clearence - ${this.clearance} cm, fuel consumption - ${this.fuelConsumption} L.`
    );
  }
}

class PassengersV extends Vehicle {
  constructor(brand, weight, clearance, fuelConsumption, capacity) {
    super(brand, weight, clearance, fuelConsumption);
    this.capacity = capacity;
  }
  getVehicleInfo() {
    console.log(
      `${this.brand}: weigh - ${this.weight}kg, clearence - ${this.clearance} cm, fuel consumption - ${this.fuelConsumption} L, capasity - ${this.capacity} pssengers`
    );
  }
}

class FreightV extends Vehicle {
  constructor(brand, weight, clearance, fuelConsumption, carryingCapacity) {
    super(brand, weight, clearance, fuelConsumption);
    this.carryingCapacity = carryingCapacity;
  }
  getVehicleInfo() {
    console.log(
      `${this.brand}: weigh - ${this.weight}kg, clearence - ${this.clearance} cm, fuel consumption - ${this.fuelConsumption} L, carrying capacity  - ${this.carryingCapacity} T`
    );
  }
}

const lorry = new FreightV("Renault", 50000, 51.5, 40, 70);
lorry.getVehicleInfo();
console.log(" lorry.fuelNeeded(1030) :>> ", lorry.fuelNeeded(1030));
