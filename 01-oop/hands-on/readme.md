# Question 1 - Car
Define a class called _Car_, which has a constructor, and have the following

- a property named _model_
- a property named _horsePower_
- a method which returns the model of the car named _getModel_
- a method which sets the model of the car named _setModel_
- a method which returns the horsepower of the car named _getHorsepower_
- a method which sets the horsepower named _setHorsepower_

**EXAMPLES OF CALLING THE FUNCTION**

```
let c= new Car("Ford", 200);
```

```
car.setModel("Ford2"); // c.model is now "Ford2"
```

```
car.getModel(); // we'll get "Ford2"
```

```
car.setHorsepower(200); // c.horsepower is now 200
```

```
car.getHorsepower(); // return 200
```

 

# Question 2 - Zoo

A zoo has many animals.

**Part A - Create a Class named Animal**

An animal has the following properties:

- name (example: "Fluffy", "Lucky", "Inuit")
- type (example: "Dog", "Leopard", "Zombie Dinosaur"
- hunger (how much food the animal eats per day measured in _kilograms_)

The animal class must have the following methods

1. A constructor that sets the name, type and hunger of the animal
2. calculateFoodCost(_dollarsPerKilogram_) --_ dollarsPerKilogram is how much dollar each kilogram of food will cost. This method should return how much it costs to feed this animal for  a day

Your class must be able to do the following

```
let  lion = new Animal("Royal", "Lion", 40);
```

```
console.log ( lion.calculateFoodcost(2) );  // expects to see 80
```

**Part B - Array of animals**

 

- Outside of the animal class, define an array named zoo.
- Create 5 animals with different amount of hunger.
- Put those 5 animals in the array
- Pass `zoo` to a function **outside of the class** called _calculateTotalCost()_. It should return the total cost of feeding the zoo. Assume it costs $5 per kilogram of food
```
var zoo = new Array();
```

```
// add 5 animals to zoo
zoo.push(new Animal("Fluffy", "Golden Retriever", 25));
zoo.push(new Animal("Zodiac", "Border Collie", 30));
zoo.push(new Animal("Korin", "German Shepherd", 50));
zoo.push(new Animal("Pancake", "Corgi", 35));
zoo.push(new Animal("Milo", "Penguin", 30));
```

```
console.log(calculateTotalCost(zoo)) // return the total cost to feed the animals
```


# Q3 - Practical Arrays

You are given a class named _Employee._  See the example for creating one.

A company contains many Employee objects in an array

**REQUIREMENTS**

**Add the following methods to Company**

1. addEmployee : Add a new employee to the company. Make sure its employee number **is unique.** If the employee number is already in use, return false, else return the newly added employee. **Hint:** See the provided getNextEmployeeID() method

2. deleteEmployee: Delete an employee by providing an employee number

3. updateEmployee: Update an employee by providing the employee number, and the its new name, position and salary. Return the updated employee

4. findEmployeeByName: Find an employee by name. **Note: If two or more employees share the same name, return them in an array**

5. findEmployeeByEmloyeeNumber: Find an employee by a employee_number. If no employees are found, return false, else return the employee object.


