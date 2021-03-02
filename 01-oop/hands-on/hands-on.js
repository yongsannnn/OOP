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
    // Company class contain employee object that is created using employee class
    // By convention, this array should store employee object only
    // No way to enforce in JavaScript
  }
  

  
  getNextEmployeeID() {
    return Math.floor(Math.random() * 1000000) + 1;
  }

  addEmployee(employee_number, name, position, salary) {
      // Check if employee_number has been used
      let existing = this.employees.find(function(e){
          e.employees_number == employee_number;
      })

      // This string of if is the validation check
      if (existing){
          throw "The employee number is already in used"
      }
    
      if (!name){
          throw "Name is empty"
      }

      if (!position){
          throw "Position is empty"
      }

      if (salary < 0){
          throw "Salary must be a positive number"
      }

      let e = new Employee(employee_number, name, position, salary)
      this.employees.push(e)
  };

  deleteEmployee(employee_number) {
    let index = this.employees.findIndex(function(e){
        return e.employee_number == employee_number
    })
    this.employees.splice(index,1);
  };

  updateEmployee(employee_number, newName, newPosition, newSalary) {
    let existingEmployee = this.findEmployeeByEmployeeNumber(employee_number);
    existingEmployee.name = newName;
    existingEmployee.position = newPosition;
    existingEmployee.salary = newSalary;
  };
  
  findEmployeeByName(name) {
    // Imperative programming
    let target = null
    for (let e of this.employees){
        if (e.name == name){
            target = e
        }
    }
    return target;

    // Functional programming
    // return this.employees.find(e => e.name == name)
  };

  findEmployeeByEmployeeNumber(employee_number) {
    let target = null
    for (let e of this.employees){
        if (e.employee_number == employee_number){
            target = e
        }
    }
    return target;
  }
}

// Create a variable using the template
let coy = new Company()

let employeeNumber = coy.getNextEmployeeID();
coy.addEmployee(employeeNumber, "Amanda", "Accountant", 4200)
coy.addEmployee(coy.getNextEmployeeID(), "Jimmy", "Joker", 2100)
coy.addEmployee(coy.getNextEmployeeID(), "Trav", "Talker", 4200)
console.log(coy.employees)

// DO NOT DO THIS
// This will bypass the checking under addEmployee, thus no encapsulation(pillar of OOP)
// coy.employees.push(new Employee(1234, "Jonas","Developer" ,1000))

// This is worst, there will be inconsistant form of object. 
// coy.employees.push({
//     "employee_number": 12345
// })
coy.deleteEmployee(employeeNumber)
console.log("After Delete")
console.log(coy.employees)

let jimmy = coy.findEmployeeByName("Jimmy")
console.log("Finding Jimmy")
console.log(jimmy)
let jimmyNum = jimmy.employee_number;
console.log(coy.findEmployeeByEmployeeNumber(jimmyNum));
coy.updateEmployee(jimmyNum, "Jimmy 2", "Grand Joker", 5000000);
console.log(jimmy)