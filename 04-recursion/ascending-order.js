const inAscendingOrder = function(numbers){
  let length = numbers.length
  // Setting up base case
  if (length == 0 || numbers[0] > numbers[1]){
    return false
  }

  if (numbers[0]<numbers[1]){
    return inAscendingOrder(numbers.slice(1))
  }
  return true;
}

let list = [1,4,3,4,5,6,7,8]
console.log(inAscendingOrder(list))
