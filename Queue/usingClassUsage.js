const {Queue}  = require('./usingClass')
//
var q = new Queue(4);
q.queueElements()
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
q.queueElements()
q.deQueue()
q.queueElements()
q.enQueue(4);
q.queueElements()
q.enQueue(5);
q.queueElements()
q.deQueue()
q.enQueue(5);
q.queueElements()
q.enQueue(6);