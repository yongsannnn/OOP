countOdd = (numbers,start,end) =>{
    let counter = 0
    countOddv2 = (numbers,start,end) =>{
        // Setting up base case
        if (start == end){
            return true;
        }
        if (numbers[0] % 2 != 0){
            counter ++
        }
        return countOddv2(numbers.slice(1),start,end-1)
    }
    countOddv2(numbers,start,end)
    return counter
}

let numbers = [1,2,3,4,5,6]

let numbers2 = [1,4,8,10,12,7,5,11]

// countOdd(numbers,0,numbers.length)
// countOdd(numbers2,0,numbers2.length)

console.log(countOdd(numbers2,0,numbers2.length))
// countOdd(numbers2,0,numbers2.length)

// console.log(counter)
