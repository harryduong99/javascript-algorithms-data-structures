// function isMonotonic(array) {
//   if (array.length < 2) {
//     return true;
//   }
//   let isIncreasing = array[1] > array[0];
//   console.log(isIncreasing);
//   let i = 1;
//   while (
//     ((array[i] > array[i - 1] && isIncreasing) ||
//       (array[i] < array[i - 1] && !isIncreasing) ||
//       array[i] === array[i - 1]) &&
//     i < array.length
//   ) {
//     i++;
//   }
//   console.log(i);

//   if (i === array.length) {
//     return true;
//   }
//   return false;
// }

function isMonotonic(array) {
  let isIncreasing = true;
  let isDecreasing = true;
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      continue;
    }
    if (array[i] > array[i-1]) {
      isDecreasing = false;
    }
    if (array[i] < array[i-1]) {
      isIncreasing = false;
    }
  }

  return isIncreasing || isDecreasing;
}

console.log(isMonotonic([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11]));
