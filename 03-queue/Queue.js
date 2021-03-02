const LinkedList = require("./LinkedList")
const Node = require("./Node")

class Queue {
    consturctor(){
        this.data = new LinkedList();
    }
    enqueue(newData){
        // Add to a queue
        this.data.addToBack(newData)
    }
    dequeue(){
        // remove from a queue
        let remove = this.data.getAt(0);
        this.data.deleteAt(0);
        return removed;
    }
    peek(){
        return this.data.getAt(0)
    }
}

module.exports = Queue;