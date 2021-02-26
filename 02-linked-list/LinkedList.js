const Node = require("./Node")

class LinkedList {
    constructor(){
        this.head = null;
    }

    // add to back
    addToBack(newNode){
        // Case 1: 
        // if there is nothing in the list, set head to the new node that we are adding
        if (this.head == null){
            this.head=newNode
        } else {
        // Case 2: if there is already something in the list
        // find the last node and set its next to the new node
        // Using a while loop because we don't know how long the list is. 
        // the while loop will check if there is something AFTER it, if there is current will take the "next"
        let current = this.head;
        while(current.getNext() != null){
            current = current.getNext();
        }
        // current will be at the last node when the while loop end
        current.setNext(newNode);
        }
    }
}