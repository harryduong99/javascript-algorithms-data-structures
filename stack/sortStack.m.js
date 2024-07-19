// solution rule: must recursive, not allowed to use other data structures
function sortStack(stack) {
  originLength = stack.length;
  if (originLength === 0) {
    return stack;
  }
  const min = stack.pop();
  return recursive(stack, [], min);
}
let originLength;

/**
 * the idea is: find min of the array, push it to the result
 * then continue the same with the new array (*) that don't contain the min above
 * stop point: when result has length equal to original array length
 * when the array got length == 0 => meaning the step is finished, going with new array (*), recursive
 */ 
function recursive(stack, left = [], min, result = []) {
  let top = stack.pop();
  if (min > top) {
    left.push(min);
    min = top;
  } else {
    left.push(top);
  }

  if (stack.length === 0) {
    result.push(min);
    if (result.length === originLength) {
      return result;
    }
    min = left.pop();
    return recursive(left, [], min, result);
  }

  return recursive(stack, left, min, result);
}

console.log(sortStack([-5, 2, -2, 4, 3, 1]));