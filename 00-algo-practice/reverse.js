const LinkedList = require("./LinkedList")
const Node = require("./Node")
const Queue = require("./Queue")
const Stack = require("./Stack")
// You are to complete the function reverseQueue. 
// This function takes in one argument, and reverse all the items in the queue.

// Hint: You can use other data structures to help you. 
// You do not have to just use the queue data structure.

// DATA INPUT 1 : 1,3,4,5
// => 5,4,3,1
// DATA INPUT 2 : 10,20,30
// => 30,20,10
let queue = new Queue()
queue.enqueue(1)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)


// Using Stack to help reverse
let stack = new Stack()


// Removing item while pushing into stack
while(queue.peek() != null){
    let item = queue.dequeue()
    console.log(item.getData())
    stack.push(item.getData())
}

// Stack is LIFO method when we pop it out, items will be reversed.
while(stack.peek() != null){
    let item = stack.pop();
    console.log(item.getData())
    queue.enqueue(item.getData())
}


