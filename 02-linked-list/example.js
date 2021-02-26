const Node = require("./Node")



// Every linked list need to have a head
// The head will always refer to the first node in the list
// If the head is null, the linked list is empty

let head = null //means empty linked list
// head refers to nothing.


// simulate adding a new node to an empty list
let n1= new Node("A")
head = n1;
// head refers to n1

// simulate adding a new node to the back of the list
let n2 = new Node("C")
n1.setNext(n2)
// head refers to n1, n1 refers to n2

// simulate adding a new node to the back of the list
let n3 = new Node("E")
n2.setNext(n3)
// head refers to n1, n1 refers to n2, n2 refers to n3