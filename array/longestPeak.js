function longestPeak(array) {
  // Write your code here.
  let maxLength = 0;
  let count = 1;
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i-1] < array[i] && array[i] > array[i+1]) {
      let j = i;
      let k = i;
      while(array[j-1] < array[j]) {
        j--;
        count++;
      }
      while(array[k] > array[k+1]) {
        k++;
        count++;
      }
      maxLength = Math.max(maxLength, count);
      count = 1;
      i = k;
    }
  }

  return maxLength;
}