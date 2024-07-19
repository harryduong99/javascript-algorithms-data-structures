function kadanesAlgorithm(array) {
  let maxEnding = array[0];
  let curSum = 0;

  for (let num of array) {
    if (curSum < 0) curSum = 0;
    curSum += num;
    maxEnding = Math.max(maxEnding, curSum);
  }

  return maxEnding;
}
