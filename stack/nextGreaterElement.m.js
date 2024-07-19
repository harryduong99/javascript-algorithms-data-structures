// using two for loop can resolve this problem, but not the optimize solution.
function nextGreaterElement(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let start = i === array.length - 1 ? 0 : i+1;
    let count = 0;
    while (array[start] <= array[i] && count < array.length - 1) {
      count++;
      start = start === array.length - 1 ? 0 : start+1;
    }
    if (count === array.length - 1) {
      result.push(-1);
      continue;
    }
    result.push(array[start]);
  }
  return result;
}

console.log(nextGreaterElement([2, 5, -3, -4, 6, 7, 2]))