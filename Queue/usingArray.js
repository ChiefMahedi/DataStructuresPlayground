// Implementing a circular queue of n-1 elements usign array of size n
// Tail will point to the index where next element will be inserted
// Element is always dequeued from the Head
// if Head === Tail queue is empty
// if Head === Tail+1  OR Head ===0 AND Tail === ArrayLength-1 queue is full
// Usage example is given below

var queue = new Array(4);

var qHead = qTail = 0;

function enQueue(x)
{
    if((qHead === qTail+1) || (qHead===0 && qTail === queue.length-1))
    {
        console.log(`Current tail index is ${qTail}`);
        console.log("Queue will overflow enqueue not possible");
    }
    else{
        console.log(`Current tail index is ${qTail}`);
        var temp = qTail;
        queue[temp]=x;
        if(qTail === queue.length-1) qTail = 0;
        else qTail++;
        console.log(`${queue[temp]} was listed to the queue. Head is ${qHead} tail is ${qTail}`);
    }
}
function deQueue()
{
    if(qHead===qTail)
    {
        console.log(`Current tail index is ${qTail}`);
        console.log("Dequeue not possible queue will underflow");
    }
    else{
        console.log(`Current tail index is ${qTail}`);
        const x = queue[qHead];
        console.log(`${queue[qHead]} was dequeued from the queue. Head is ${qHead+1} tail is ${qTail}`);
        qHead = qHead+1;
        return x;
    }
}
function queueElements()
{
    console.log(queue);
}
//Usage
queueElements()
enQueue(1);
enQueue(2);
enQueue(3);
queueElements()
deQueue()
queueElements()
enQueue(4);
queueElements()
enQueue(5);
queueElements()
deQueue()
enQueue(5);
queueElements()
enQueue(6);