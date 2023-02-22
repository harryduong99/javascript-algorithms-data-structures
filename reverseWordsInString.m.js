
// time: O(n^2) - because of line 16, time complexity for that operation (concat at start) in js will take O(n)
function reverseWordsInString(string) {
  let word = '';
  let space = '';
  let result = '';
  if (string.length === 1) {
    return string;
  }
  for (let i = string.length - 1; i >= -1; i--) {
    if (string[i] === ' ' || i === -1) {
      space += ' ';
      result += word;
      word = '';
    } else {
      word = string[i] + word;
      if (string[i+1] === ' ') {
        result += space;
      }
      space = '';
    }
  }
  return result;
}

console.log(reverseWordsInString(' ').length)