//To represent the nodes in linked list first we have to create the Node class
class Node {
  //The constructor takes the key and value as argument
  constructor(key, value) {
    //This is the node key
    this.key = key;
    //This is the value
    this.value = value;
    //These are the node pointer attributes
    this.prev = null;
    this.next = null;
  }
}
//Node class ends here

//To represent the linked list first we need a Linked list class (Specifically doubly linked list)
class doublyLinkedList {
  constructor() {
    //The head pointer points to the first node in the list
    this.head = null;
  }
  //Prepend: It takes a Node object as argument.
  //It adds the Node object as the first node of the list
  prepend(nodeObject) {
    nodeObject.next = this.head;
    nodeObject.prev = null;
    if (this.head != null) {
      this.head.prev = nodeObject;
    }
    this.head = nodeObject;
  }

  //search: It takes the key as argument and looks for the first node with this key value
  searchValue(key) {
    let x = this.head;
    while (x != null && x.key != key) {
      x = x.next;
    }
    if (x) {
      console.log("Value Found:", x.value);
      return x.value;
    } else {
      console.log("Not found!");
      return;
    }
  }
  //search: It takes the key as argument and looks for the first node with this key value
  searchNode(key) {
    let x = this.head;
    while (x != null && x.key != key) {
      x = x.next;
    }
    return x;
  }
  //deleteUsingNode: It takes a Node object as argument
  deleteUsingNode(pointerToaNode) {
    //This if is needed for the same reason as insert method
    if (pointerToaNode === null) {
      console.log("Deleting is not possible");
    } else {
      if (pointerToaNode.prev != null) {
        pointerToaNode.prev.next = pointerToaNode.next;
      } else {
        this.head = pointerToaNode.next;
      }
      if (pointerToaNode.next != null) {
        pointerToaNode.next.prev = pointerToaNode.prev;
      }
    }
  }
  //This method lists all elements on the list
  listAllElements() {
    let x = this.head;
    while (x != null) {
      console.log(`Key is: ${x.key}`);
      console.log(`Previous attribute is: ${x.prev}`);
      console.log(`Next attribute is: ${x.next}`);
      x = x.next;
    }
    console.log("-------------------------------");
  }
}
module.exports = {
  Node,
  doublyLinkedList,
};
