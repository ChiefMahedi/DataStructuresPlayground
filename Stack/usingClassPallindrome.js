//Import the Stack class from usingClass.js
const {Stack }= require('./usingClass');

let s = new Stack();
var string1 = "abccba";
for(var i = 0; i<string1.length;i++)
{
    s.push(string1[i]);
}
var pallin = "";

var top = s.stackCurrentSize();
console.log(`Stack has currently ${top} elements`);

for(var i= top-1; i>-1; i--)
{
  pallin+= s.pop();
}
console.log(pallin)
if(string1 === pallin)
{
    console.log("It's pallindrome");
}
else{
    console.log("It's not pallindrome");
}
console.log(s.stackCurrentSize());
