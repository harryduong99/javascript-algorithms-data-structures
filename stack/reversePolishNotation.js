function reversePolishNotation(tokens) {
  let operationStack = [];
  let operations = {
    "+": (a,b) => (a+b),
    "-": (a,b) => (a-b),
    "*": (a,b) => (a*b),
    "/": (a,b) => Math.trunc(a/b),
  }

  for (let token of tokens) {
    if (!isNaN(token)) operationStack.push(+token);
    else {
      let operand2 = operationStack.pop();
      let operand1 = operationStack.pop();
      operationStack.push(operations[token](operand1, operand2));
    }
  }

  return +operationStack[0];
}