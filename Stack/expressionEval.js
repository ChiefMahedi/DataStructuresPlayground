const { Stack } = require("./usingClass.js");
//Evaluates Postfix Expressions
function evalExp(postFixExpression) {
  const stack = new Stack();
  const tokens = postFixExpression.split(" ");
  console.log(`token array contains: ${tokens}`);

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (!isNaN(token) && token!='') 
    {
      stack.push(parseInt(token));
    } 
    else if (
      token === "+" ||
      token === "-" ||
      token === "*" ||
      token === "/"
    ) 
    {
      const operandY = stack.pop();
      const operandX = stack.pop();
      let result = null;
      switch (token) {
        case "+":
          result = operandX + operandY;
          break;
        case "-":
          result = operandX - operandY;
          break;
        case "*":
          result = operandX * operandY;
          break;
        case "/":
          result = operandX / operandY;
          break;
      }
        stack.push(result);
    } 
    else
    {
      throw new Error("Invalid Expression!");
    }
  }
  return stack.pop();
}
//only one space is allowed between individual numbers or operators
const expression = "51 2 + 4 * 3 -"; //209
const result = evalExp(expression);
console.log(`Result: ${result}`);
