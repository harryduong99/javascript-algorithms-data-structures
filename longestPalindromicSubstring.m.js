
// time complexity is so bad, check this
// https://www.educative.io/answers/longest-palindromic-substring-in-on-with-manachers-algorithm
function longestPalindromicSubstring(string) {
  let maxLength = 0;
  let result;
  for (let i = 0; i < string.length; i++) {
    for (let j = string.length - 1; j >= i; j--) {
      const toCheck = string.substring(i, j+1);
      if (isPalindrome(toCheck) && toCheck.length > maxLength) {
        maxLength = toCheck.length;
        result = toCheck;
      }
    }
  }
  return result;
}

function isPalindrome(string) {
  for (let i = 0; i < Math.ceil(string.length / 2); i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(longestPalindromicSubstring("abcdefghfedcbaa"));
