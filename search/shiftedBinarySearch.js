function shiftedBinarySearch(array, target) {
  let left  = 0;

  let right = array.length - 1;

  while (left <= right) {
    const center = Math.floor((left + right) / 2)

    if (array[center] == target) {
      return center;
    }
  
    if (array[left] <= array[center]) {
      if (target < array[center] && target >= array[left]) {
        right = center - 1;
      } else {
        left = center + 1;
      }
    } else {
      if (target > array[center] && target <= array[right]) {
        left = center + 1;
      } else {
        right = center - 1;
      }
    }
  }
  return -1;
}
