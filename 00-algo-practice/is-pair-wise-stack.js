// Complete the function isPairwiseStack that takes in one stack as an argument. 
// It will return true if the stack is pairwise consecutive. 
// A stack is so if two pair of numbers are conseuctive (that is, their differences is 1 or -1).

// For instance, the stack below is pairwise consecutive:

// 1 2 4 5 7 6

// Each pair of numbers in the stack differs from each other by 1 or -1.

// The following stack is not pairwise consecutive

// 1 5 3 4 6 7

// The first difference between the first two pair of numbers is more than 1.

// Finally, if the number of elements in the stack is odd 
// (i.e, the last number does not have a pair) 
// then it is not pairwise consecutive. For instance:

// 1 2 4 5 6 
// return false
const Stack = require("./Stack")

// let list = [1,2,4,5,7,6]

// let stack = new Stack();
// stack.push(6)
// stack.push(7)
// stack.push(5)
// stack.push(4)
// stack.push(2)
// stack.push(1)

// while(stack.peek() != null){
//     let item = stack.pop()
//     console.log(item.getData())
// }

const isPairwiseStack = (stackA) => {
  let stackB = new Stack();

  while(stackA.peek()!= null){
    let item = stackA.pop();

    if (stackB.peek()){
      let item2 = stackB.pop();
      if (Math.abs(item.getData()-item2.getData()) != 1){
        return false;
      }
    } else {
      stackB.push(item.getData())
    }
  }

  if (stackB.peek() != null){
    return false;
  }
  return true;
}

