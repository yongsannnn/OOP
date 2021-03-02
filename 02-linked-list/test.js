const LinkedList = require("./LinkedList")
const Node = require("./Node")

let numbers = new LinkedList();
numbers.addToBack(new Node(101))
numbers.addToBack(new Node(103))
numbers.addToBack(new Node(105))

// console.log(numbers)
// numbers.insertAt(2, new Node(123))
// numbers.insertAt(0, new Node(100))

numbers.display()

// console.log("The number is " + numbers.getAt(1))

// console.log(numbers.count())
// console.log(numbers.contains(105))

numbers.insertSorted(104)
console.log("After insert!!!")
numbers.display()