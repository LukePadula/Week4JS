// Create a class that represents anything you like
// Create a class that extends the first class
// Create a class that extends the second class
// Make sure each class has at least one method and one piece of data unique to it
// Create an instance of the final class
// Modify the classes above to use get/set

class Building {
  constructor(buildingName, numOfWalls) {
    this.buildingName = buildingName;
    this.numOfWalls = numOfWalls;
  }
  get buildingDescription() {
    return `${this.buildingName} ${this.numOfWalls}`;
  }
}

class House extends Building {
  constructor(buildingName, numOfWalls, numOfRooms, address) {
    super(buildingName, numOfWalls);
    this.numOfRooms = numOfRooms;
    this.address = address;
  }
  get addressDescription() {
    return `${this.buildingName} ${this.address}`;
  }
}

class Bungalow extends House {
  constructor(buildingName, numOfRooms, address) {
    super(buildingName, 4, numOfRooms, address);
    this.numOfFloors = 1;
  }
  set setbuildingName(buildingName) {
    this.buildingName = buildingName;
  }
  set setnumOfRooms(numOfRooms) {
    numOfRooms = numOfRooms;
  }
  get bungalowDescription() {
    return `This building is ${this.buildingName}, it has ${this.numOfRooms} rooms and ${this.numOfFloors} floor `;
  }
}

const _bungalow = new Bungalow("Berry Cottage", 6, "Berry Lane");
// _bungalow.describeBuilding();

_bungalow.buildingName = "Apple Cottage";
// console.log(_bungalow.numOfRooms);

console.log(_bungalow.bungalowDescription);
// console.log(hse);

console.log(_bungalow.addressDescription);
