//Linked List is needed for chaining
const {doublyLinkedList} = require('./doublyLL')

class HashTable{
    constructor(size)
    {
      this.size = size;
      this.T = new Array(this.size);
      for(let i = 0; i<this.T.length; i++)
      {
        this.T[i] = new doublyLinkedList()
      }
    }
    //Division Method
    hashFunction(key)
    {
        return (key % this.size);
    }
    chainedHashInsert(nodeObject)
    {
      const slot = this.hashFunction(nodeObject.key);
      this.T[slot].prepend(nodeObject);
    }
    chainedHashSearch(key)
    {
      const slot = this.hashFunction(key);
      return this.T[slot].search(key);
    }
    chainedHashDelete(pointerToaNode)
    {
      const slot = this.hashFunction(pointerToaNode.key);
      this.T[slot].deleteUsingNode(pointerToaNode);
    }
    listHashTable()
    {
      for(let i = 0; i<this.T.length; i++)
      {
        console.log("List from slot: ",i);
        this.T[i].listAllElements();
      }
    }
}
module.exports ={
  HashTable
}