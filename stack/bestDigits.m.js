function bestDigits(number, numDigits) {
  // the order after removal can not be changed => can use stack
  if (number.length === 0) {
    return number;
  }
  let stack = [number[0]];
  let numOfTakeOut = 0;
  for (let i = 1; i < number.length; i++) {
    let quotaLeft =  numDigits - numOfTakeOut;
    // compare the top of stack with the reach element and determining the removal
    if (numOfTakeOut < numDigits && stack[stack.length-1] <= number[i]) {
      let j = 0;
      // if found out bigger number => remove all elements that CAN BE removed in the stack
      // 2 conditions: still have quota left to remove | and the top of stack after each removal is smaller or equal to the current number
      while (j < quotaLeft && stack[stack.length-1] <= number[i]) {
        stack.pop();
        numOfTakeOut++;
        j++;
      }
      stack.push(number[i]);
      continue;
    } 
    stack.push(number[i]);
  }

  // after the loop, there might be slot available for removing, (eg: number: 321 | remove 2 digits)
  // but since we already determined how big the result is by the loop above
  // => now only need to take out list of first elements, no need to care about the tail

  let result = "";
  for (let k = 0; k < number.length - numDigits; k++) {
    result += stack[k];
  }

  return result;
}

console.log(bestDigits("4262839", 2));
// console.log(bestDigits("100300200004", 4));
// console.log(bestDigits("5132918", 4));

// 462839

// 100300200004 4
// 30200004
// 2

/*
  [4] 
  4 < 6, 0 < 2
  [6] 
  6 > 2
  [6, 2]
  2 < 8, 1 < 2
  [6, 8] 
  6839

  [6, 8]
  8 > 3
  [6, 8, 3]

  8 < 9, 2 < 3
  [6, 8, 9]
*/