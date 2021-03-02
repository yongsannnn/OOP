const Queue = require("./Queue")
const Stack = require("./Stack")


let q1 = new Queue()
q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)
q1.enqueue(4)
q1.enqueue(5)
q1.enqueue(6)



let s1 = new Stack()
// Remove item while pushing into stack
while (q1.peek() != null){
    let item = q1.dequeue();
    s1.push(item)
}

// Checking if reverse
while (s1.peek() != null){
    let item = s1.pop()
    console.log(item)
    q1.enqueue(item)
}

