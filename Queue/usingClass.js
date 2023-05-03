class Queue {
  //Using constructor initialize the size of the queue
  constructor(size) {
    this.qHead = 0;
    this.qTail = 0;
    this.queue = new Array(size);
  }
  enQueue(x) {
    if (
      this.qHead === this.qTail + 1 ||
      (this.qHead === 0 && this.qTail === this.queue.length - 1)
    ) {
      console.log(`Current tail index is ${this.qTail}`);
      console.log("Queue will overflow enqueue not possible");
    } else {
      console.log(`Current tail index is ${this.qTail}`);
      var temp = this.qTail;
      this.queue[temp] = x;
      if (this.qTail === this.queue.length - 1) this.qTail = 0;
      else this.qTail++;
      console.log(
        `${this.queue[temp]} was listed to the queue. Head is ${this.qHead} tail is ${this.qTail}`
      );
    }
  }
  deQueue() {
    if (this.qHead === this.qTail) {
      console.log(`Current tail index is ${this.qTail}`);
      console.log("Dequeue not possible queue will underflow");
    } else {
      console.log(`Current tail index is ${this.qTail}`);
      const x = this.queue[this.qHead];
      console.log(
        `${this.queue[this.qHead]} was dequeued from the queue. Head is ${
          this.qHead + 1
        } tail is ${this.qTail}`
      );
      this.qHead = this.qHead + 1;
      return x;
    }
  }
  queueElements() {
    console.log(this.queue);
  }
}
module.exports={
    Queue
}
