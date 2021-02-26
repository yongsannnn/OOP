class Employee {
  // Declaring outside constructor, dont need "this"
  first_name = ""
  last_name = ""
  salary = 0

  // Declaring inside constructor need to have "this"
  constructor(first_name,last_name,salary){
    this.first_name = first_name,
    this.last_name = last_name,
    this.salary = salary 
  }

  getTakeHomePay(){
    return this.salary*0.8
  } 

  // Getter and Setter Function
  getSalary(){
    return this.salary; 
  }

  // Setter 
  // You can insert in conditions to make sure your dataset is of certain conditions
  // Places you can use. Eg, email, password, postal code
  setSalary(newSalary){
    if(newSalary >= 0){
      this.salary = newSalary
    }
  }
}

class Department {
  employees = []
  name = ""

  // Note all class have an empty constructor that does nothing
  constructor(name){
    this.name = name;
  }

  addEmployee(employee){
    this.employees.push(employee)
  }

  calcTakeHomePay(){
    let total = 0;
    for (let e of this.employees){
      total += e.getTakeHomePay * 0.8
    }
  }
}


let e1 = new Employee ("James", "Cook", 4200)

// Creating new employeee if no constructor
let e2 = new Employee()
e2.first_name = "Sue"
e2.last_name = "Woodsmen"
e2.salary = 4500

console.log(e1.getTakeHomePay())
console.log(e1.getSalary())
e1.setSalary(3000)
console.log(e1.getSalary())

// console.log(e2)