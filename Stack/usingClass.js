class Stack{
    constructor()
    {
        this.elements = new Array();
        this.top = -1;
    }
    stackEmpty()
    {
       if(this.top === -1)
       {
        return true;
       }
       else return false;
    }
    stackCurrentSize()
    {
        return this.top+1;
    }
    push(x)
    {
        this.top++;
        this.elements[this.top] = x;
        console.log(`${this.elements[this.top]} was pushed and top is ${this.top}`);
    }
    pop()
    {
        if(this.stackEmpty())
        {
            console.log("Stack underflow can't pop");
        }
        else{
            console.log(`${this.elements[this.top]} was popped and top is ${this.top-1}`);
            this.top--;
            return this.elements[this.top+1];
        }
    }
}
module.exports={
    Stack
}