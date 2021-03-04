// # Reverse Stack

// Complete the function `reverseStack` which when given a stack as an argument,
//  will rearrange its items in reverse.

// *Hint*: You can use other data structures, not just the stack, to help solve this question.

// *Note*: When testing, assume the first number is the **top** of the stack.

// DATA SET 1
// [1,4,5,3] 
// DATA SET 2
// [10,20,30]

const Queue = require("./Queue")
const Stack = require("./Stack")

let stackA = new Stack()

stackA.push(3)
stackA.push(5)
stackA.push(4)
stackA.push(1)

const reverseStack = (stackA) => {
    // Remove all the items in the stack in it's order and enqueue them into a queue.
    let queue = new Queue()

    while (stackA.peek() != null) {
        let item = stackA.pop()
        queue.enqueue(item.getData())
    }

    // Dequeue all item in queue and push them into stack.
    while (queue.peek() != null) {
        let item = queue.dequeue()
        // console.log(item.getData())
        stackA.push(item.getData())
    }

    return stackA
}

reverseStack(stackA)

