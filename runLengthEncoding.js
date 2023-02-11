function runLengthEncoding(string) {
  // Write your code here.
  let count = 1;
  let output = '';
  let currentChar = null;
  for (let i = 0; i < string.length; i++) {
    currentChar = string[i];
    if (currentChar === string[i+1] && count < 9) {
      count++
    } else {
      output = `${output}${count}${currentChar}`;
      count = 1;
    }
  }
  return output;
}

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"))