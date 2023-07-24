const { HashTable } = require("./implementation");
const { Node } = require("./doublyLL");
const ht = new HashTable(5);

const node1 = new Node(1, "One");
const node2 = new Node(23, "Twenty Three");
const node3 = new Node(21, "Twenty one");
const node4 = new Node(2, "Two");
const node5 = new Node(12, "Twelve");
const node6 = new Node(22, "Twenty Two");
const node7 = new Node(3, "Three");

ht.chainedHashInsert(node1);
ht.chainedHashInsert(node2);
ht.chainedHashInsert(node3);
ht.chainedHashInsert(node4);
ht.chainedHashInsert(node5);
ht.chainedHashInsert(node6);
ht.chainedHashInsert(node7);
ht.listHashTable();
ht.chainedHashDelete(node1);
ht.chainedHashDelete(ht.chainedHashSearchNode(22));
ht.listHashTable();
ht.chainedHashSearchValue(1); //Not found!
ht.chainedHashSearchValue(23); //Value Found: Twenty Three
ht.chainedHashSearchValue(21); //Value Found: Twenty one
ht.chainedHashSearchValue(2); // Value Found: Two
ht.chainedHashSearchValue(22); // Not found!
ht.chainedHashSearchValue(3); //Value Found: Three
