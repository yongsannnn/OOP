// Q1
class Car {
  constructor(model,horsePower){
    this.model = model,
    this.horsePower = horsePower
  }
  getModel(){
    return this.model
  }

  setModel(newModel){
    this.model = newModel
  }

  getHorsepower(){
    return this.horsePower
  }

  setHorsepower(newHorse){
    this.horsePower = newHorse
  }
}

// Q2

class Animal {
  constructor(name,type,hunger){
    this.name = name,
    this.type = type,
    this.hunger = hunger
  }
  calculateFoodCost(dollarPerKilogram){
    return dollarPerKilogram * this.hunger
  }

}
let lion = new Animal("Royal", "Lion", 40)
console.log(lion.calculateFoodCost(2))

///////////////////////
// DO PART B HERE:
/////////////////////


let zoo = new Array();
zoo.push(new Animal("Fluffy", "Golden Retriever", 25));
zoo.push(new Animal("Zodiac", "Border Collie", 30));
zoo.push(new Animal("Korin", "German Shepherd", 50));
zoo.push(new Animal("Pancake", "Corgi", 35));
zoo.push(new Animal("Milo", "Penguin", 30));

console.log(zoo)

// NOTE: THIS IS AN INCOMPLETE FUNCTION
function calculateTotalCost() {
  let total = 0;
  for (let i of zoo){
    total += i.calculateFoodCost(5)
  }
  return total
}
console.log(calculateTotalCost(zoo));