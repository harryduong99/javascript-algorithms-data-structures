/**
 * array [7,10,12,7,9,14]
 * maxSums = [10, 10, 19, 19, 28, 33]
 * => maxSums[i] = max (maxSums[i-1], maxSums[i-2] + array[i])
 */
// hint: max
function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];
  const maxSums = array.slice();
  console.log(maxSums);
  maxSums[1] = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    maxSums[i] = Math.max(maxSums[i-1], maxSums[i-2] + array[i]);
  }

  return maxSums[maxSums.length - 1];
}

console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]))