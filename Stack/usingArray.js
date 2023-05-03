//Implementing stack using ARRAY of size 10
//top = -1 means the Stack is empty
var stack = new Array(10);
var top = -1;
function stackEmpty()
{
    if(top === -1)
    {
        return true;
    }
    else return false;
}
function stackCurrentSize()
{
    return top+1;
}
function push(n)
{
    if(top === stack.length-1)
    {
        console.log("Stack Overflow can't push");
    }
    else{
        top++;
        stack[top]=n;
        console.log(`${n} has been pushed and top of the stack is ${top}`);
    }
}
function pop()
{
    if(top===-1)
    {
        console.log("Stack underflow can't pop");
    }
    else{
        console.log(`${stack[top]} has been popped new top is ${top-1}`);
        top--;
        return stack[top+1];
    }
}

module.exports ={
    stackEmpty,push, pop,stackCurrentSize
}