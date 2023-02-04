function isPalindrome(string) {
  // Write your code here.
  const stringLength = string.length;
  for (let i = 0; i < Math.ceil(stringLength / 2); i++) {
    if (string[i] !== string[stringLength - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('abcdcba'));