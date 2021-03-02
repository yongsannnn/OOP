const LinkedList = require("./LinkedList");
const Node = require("./Node");

class Queue {
  constructor() {
    this.data = new LinkedList();
  }

  enqueue(newData) {
    // add the new data as a new Node to back of the linked list
    let newNode = new Node(newData);
    this.data.add(newNode);
    
  }

  dequeue() {
    if (this.data.getAt(0) != null) {
      let dataToRemove = this.data.deleteAt(0);
      return dataToRemove;
    }
    return null;
  }
  peek() {
      return this.data.getAt(0);
  }
  length() {
    return this.data.length();
  }
  isEmpty() {
      return this.data.length() == 0;
  }
}
module.exports = Queue;
