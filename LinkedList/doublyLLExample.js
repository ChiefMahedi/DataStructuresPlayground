const { Node, doublyLinkedList } = require('./doublyLL');
const dll = new doublyLinkedList();

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
dll.prepend(node1);
dll.listAllElements();
dll.prepend(node2);
dll.listAllElements();
dll.insert(node3, dll.search(1));
dll.listAllElements();
dll.insert(node4, dll.search(2));
dll.listAllElements();
dll.deleteUsingNode(dll.search(2));
dll.listAllElements();