// using stack for sure
function balancedBrackets(string) {
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] !== ")" &&
      string[i] !== "(" &&
      string[i] !== "]" &&
      string[i] !== "[" &&
      string[i] !== "}" &&
      string[i] !== "{"
    ) {
      continue;
    }
    if (
      (string[i] === ")" && stack[stack.length - 1] === "(") ||
      (string[i] === "]" && stack[stack.length - 1] === "[") ||
      (string[i] === "}" && stack[stack.length - 1] === "{")
    ) {
      stack.pop();
      continue;
    }
    stack.push(string[i]);
  }

  if (stack.length === 0) {
    return true;
  }

  return false;
}

console.log(balancedBrackets("([])(){}(())()()"));
