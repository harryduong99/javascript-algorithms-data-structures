
// bigO(n) time | bigO(1) space (because we done't need to use any extra space that scale to the size of string)
function oneEdit(stringOne, stringTwo) {
  if (Math.abs(stringOne.length - stringTwo.length) > 1) {
    return false;
  }
  let isLengthEqual = stringOne.length - stringTwo.length === 0;
  const length = stringOne.length <= stringTwo.length ? stringOne.length : stringTwo.length;
  let mustEdit = false;
  let oneIndex = 0;
  let twoIndex = 0;
  for (let i = 0; i < length; i++) {
    if (stringOne[oneIndex] !== stringTwo[twoIndex]) {
      if (mustEdit) {
        return false;
      }
      if (isLengthEqual) {
        mustEdit = true;
      } else {
        if (stringOne[i+1] === stringTwo[i] && stringOne.length > stringTwo.length) {
          oneIndex++;
          mustEdit = true;
          continue;
        } else if ( stringOne[i] === stringTwo[i+1] && stringOne.length < stringTwo.length) {
          twoIndex++;
          mustEdit = true;
          continue;
        } else {
          return false;
        }
      }
    }
    oneIndex++;
    twoIndex++;
  }
  return true;
}

console.log(oneEdit('hello', 'heloos'));