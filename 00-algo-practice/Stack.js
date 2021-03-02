const LinkedList = require('./LinkedList');
const Node = require('./Node');

class Stack {
    constructor() {
        this.data = new LinkedList();
    }
    push(newData) {
        this.data.insertAt(0, new Node(newData));
    }
    pop() {
        let deleted = this.data.deleteAt(0);
        return deleted;
    }
    isEmpty() {
        return this.data.length() == 0;
    }
    peek() {
        return this.data.getAt(0);
    }
}   

module.exports = Stack;
