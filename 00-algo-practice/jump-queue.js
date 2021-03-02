// Finish the function jumpQueue, which takes in one Queue object as an argument, such the second item in the queue is removed. Do not return a new Queue; make the change in the given Queue argument.
// Hint: One queue is not enough.
// DATA INPUT 1 : 1,2,3,4,5
// => 1,3,4,5
// DATA INPUT 2 : 4,4,2,2,3
// => 4,2,2,3

const LinkedList = require("./LinkedList")
const Node = require("./Node")
const Queue = require("./Queue")

let q1 = new Queue()
q1.enqueue(4)
q1.enqueue(4)
q1.enqueue(3)
q1.enqueue(2)
q1.enqueue(5)

function jumpQueue(q1){
    let q2 = new Queue()
    let counter = 0
    while (q1.peek()!=null){
        if (counter != 1){
            let item = q1.dequeue();
            // console.log(counter)
            // console.log(item.getData())
            q2.enqueue(item.getData())
        } else {
            let item = q1.dequeue()
        }
        counter += 1
    }
    
    while(q2.peek()!=null){
        let item = q2.dequeue()
        console.log(item.getData())
        q1.enqueue(item.getData())
    }
    return q1
}

jumpQueue(q1)