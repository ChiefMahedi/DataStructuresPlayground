const {HashTable} = require('./implementation')
const {Node} = require('./doublyLL')
const ht = new HashTable(5);

const node1 = new Node(1);
const node2 = new Node(11);
const node3 = new Node(21);
const node4 = new Node(2);
const node5 = new Node(12);
const node6 = new Node(22);
const node7 = new Node(3);

ht.chainedHashInsert(node1);
ht.chainedHashInsert(node2);
ht.chainedHashInsert(node3);
ht.chainedHashInsert(node4);
ht.chainedHashInsert(node5);
ht.chainedHashInsert(node6);
ht.chainedHashInsert(node7);
ht.listHashTable()
ht.chainedHashDelete(node1);
ht.listHashTable()
console.log(ht.chainedHashSearch(22));
