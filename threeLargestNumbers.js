function findThreeLargestNumbers(array) {
  let result = [array[0], array[1], array[2]];
  if (array.length === 3) {
    return result;
  } 
  for (let i = 3; i < array.length; i++) {
    const min = Math.min(...result);
    if (array[i] > min) {
      const minIdx = result.indexOf(min);
      result[minIdx] = array[i];
    }
  }
  return result;
}

console.log(findThreeLargestNumbers([-1, -5, 5, 3, 2, 4]))