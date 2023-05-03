//Import the Stack from usingArray.js
//Note: in usingArray.js maximum elements Stack can hold is 10. You can change it if you want to play with it
const Stack = require('./usingArray');

//Using the Stack for pallindrome
var string1 = "racecar";
for(var i =0; i<string1.length;i++)
{
    Stack.push(string1[i]); 
}
var pallin = "";

var top = Stack.stackCurrentSize();
console.log(`Stack has currently ${top} elements`);

for(var i= top-1; i>-1; i--)
{
  pallin+= Stack.pop();
}
console.log(pallin)
if(string1 === pallin)
{
    console.log("It's pallindrome");
}
else{
    console.log("It's not pallindrome");
}
console.log(Stack.stackCurrentSize());