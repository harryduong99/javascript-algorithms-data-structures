function selectionSort(array) {
  for (let i = 0; i < array.length -1; i++) {
    let minNumIndex= 1; 
    for (let j = i+1; j < array.length; j++) {
      if (array[minNumIndex] > array[j]) {
        minNumIndex = j;
      }
    }
    [array[i], array[minNumIndex]] = [array[minNumIndex], array[i]];
  }

  return array;
}

let array = [8,5,2,9,5,6,3];
console.log(insertionSort(array));