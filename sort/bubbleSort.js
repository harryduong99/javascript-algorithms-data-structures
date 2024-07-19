function bubbleSort(array) {
  let swaps = 0;
  for (let  i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i+1]) {
      [array[i], array[i+1]] = [array[i+1], array[i]];
      swaps++;
    }
  }
  return swaps === 0 ? array : bubbleSort(array);
}

let array = [8,5,2,9,5,6,3];
console.log(bubbleSort(array));