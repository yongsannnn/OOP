class Node{
    constructor (data){
        this.data = data
        this.next = null
    }

    getNext(){
        return this.next;
    }

    setNext(next){
        this.next = next;
    }
    
    getData(){
        return this.data
    }

    setData(newData){
        this.data = newData;
    }
}


// Referenceing 
// h is reference to A means when A change h changes
// let A = new Node ("A")
// let h = A

// A.setData("Z")

// This is not referencing, this is assignment
// y = x, x will change to 10 as it is a primitive dataset, and y will be assigned to the value 10
// let x = 10
// let y = x
// x += 15
// console.log(y)
// console.log(h.getData())



module.exports = Node