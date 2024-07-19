function indexEqualsValue(array) {
  let left = 0;
  let right = array.length - 1;
  let indexValueMatch = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid === array[mid]) {
      indexValueMatch = mid;
      right = mid - 1;
    } else if (array[mid] < mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return indexValueMatch;
}
