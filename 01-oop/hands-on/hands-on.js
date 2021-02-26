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



class Employee
{
  constructor(employee_number, name, position, salary) {
    this.employee_number = employee_number; // UNIQUE across all employees
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}
// let e = new Employee(1,"Sue", "Sales", 2000)
// console.log(e)

class Company
{
  constructor() {
    this.employees = [];
  }
  

  
  getNextEmployeeID() {
    return new Date().getUTCMilliseconds();
  }

  addEmployee(employee_number, name, position, salary) {
    return new Employee (employee_number, name, position, salary)
  };

  deleteEmployee(employee_numer) {
    
  };

  updateEmployee(employee_number, newName, newPosition, newSalary) {
    
  };
  
  findEmployeeByName(name) {
    
  };

  findEmployeeByEmployeeNumber(employee_number) {
    
  }
}

// Create a variable using the template
let coy = new Company()
// Creating employee using the employee class IN company class
let e1 = coy.addEmployee(coy.getNextEmployeeID(), "Alex Au","Analyst", 3000)
let e2 = coy.addEmployee(coy.getNextEmployeeID(), "Bert Bao","Bartender", 2500)
let e3 = coy.addEmployee(coy.getNextEmployeeID(), "Charlie Chin","Coder", 4000)
let e4 = coy.addEmployee(coy.getNextEmployeeID(), "Douglos Dong","Dentist", 5500)
// Push all the employee to the 
coy.employees.push(e1,e2,e3,e4)
console.log(coy.employees)

// console.log(new Company.addEmployee())