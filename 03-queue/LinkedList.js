const Node = require("../02-linked-list/Node")

class LinkedList {
    constructor() {
        this.head = null;
    }

    // add to back
    addToBack(newNode) {
        // Case 1: 
        // if there is nothing in the list, set head to the new node that we are adding
        if (this.head == null) {
            this.head = newNode
        } else {
            // Case 2: if there is already something in the list
            // find the last node and set its next to the new node
            // Using a while loop because we don't know how long the list is. 
            // the while loop will check if there is something AFTER it, if there is current will take the "next"
            let current = this.head;
            while (current.getNext() != null) {
                current = current.getNext();
            }
            // current will be at the last node when the while loop end
            current.setNext(newNode);
        }
    }
    insertAt(index, newNode) {
        if (index == 0) {
            // means we are inserting newNode at the front
            // store a temp reference to the former head
            let oldHead = this.head;
            this.head = newNode;
            this.head.setNext(oldHead);
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.getNext()
            }
            let oldNext = current.getNext()
            current.setNext(newNode)
            newNode.setNext(oldNext)
        }
    }
    display() {
        let current = this.head;
        while (current != null) {
            console.log(current.getData())
            current = current.getNext()
        }
    }

    deleteAt(index) {
        if (index == 0) {
            // let newNext = this.head.getNext();
            this.head = this.head.getNext()

            // Alternate
            // this.head.setNext(this.head.getNext());
        } else {
            // Move to the node BEFORE the one we want to delete
            let current = this.head
            for (let i = 0; i < index - 1; i++) {
                current = current.getNext();
            }
            // now current is at the node BEFORE what we want to delete
            let newNext = current.getNext().getNext();
            current.setNext(newNext)

            // Alternate
            // current.setNext(current.getNext().getNext())
        }
    }

    getAt(index) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.getNext();
        }
        return current.getData();
    }

    count() {
        let current = this.head
        let counter = 0
        // console.log(current)
        while (current != null) {
            counter += 1
            current = current.getNext()
        }
        return counter
    }

    contains(searchNode) {
        let current = this.head
        while (current != null) {
            if (current.getData() == searchNode) {
                return true
            } else {
                current = current.getNext()
            }
        }
        return false

    }

     insertSorted(number) {
        let newNode = new Node(number);
        if (this.head == null) {
            this.head = newNode;
        } else {

            // if the list is not empty
            let prev = null;
            let current = this.head;
            while (current != null) {

                if (number < current.getData())
                {
                    // found the place to insert at
                    if (prev != null) {
                        prev.setNext(newNode);
                        newNode.setNext(current);
                    } else {
                        this.head = newNode;
                        newNode.setNext(current);
                    }

                    return;
                }

                prev = current;
                current = current.getNext(); 
            }

            // if we reach the end of the loop,
            // means the new node is supposed to be at the aback
            prev.setNext(newNode);

        }

    }
}

module.exports = LinkedList