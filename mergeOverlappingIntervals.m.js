// function mergeOverlappingIntervals(array) {
//   array.sort(sortFunction);
//   console.log(array);
//   let k = 0;
//   let result = [];
//   let temp = array[0];
//   while (k < array.length) {
//     if (array[k][1] < temp[1]) {
//       k++;
//       continue;
//     }

//     if (array[k][0] < temp[1] && k > 0) {
//       console.log(k);
//       temp[1] = array[k][1];
//       k++;
//       continue;
//     }
    
//     if (k < array.length - 1 && array[k][1] >= array[k + 1][0]) {
//       const head =
//         array[k + 1][1] > array[k][1]
//           ? array[k + 1][1]
//           : array[k][1];
//       if (temp.length) {
//         temp[1] = head;
//       } else {
//         temp = [array[k][0], head];
//       }
//     } else {
//       console.log('asdf');
//       if (temp.length) {
//         result.push(temp);
//         temp = [];
//         if (k === array.length - 1) {
//           result.push(array[k]);
//         }
//       } else {
//         result.push(array[k]);
//       }
//     }
//     k++;
//   }

//   if (temp.length) {
//     result.push(temp);
//   }
//   return result;
// }

// function sortFunction(a, b) {
//   if (a[0] === b[0]) {
//       return 0;
//   }
//   else {
//       return (a[0] < b[0]) ? -1 : 1;
//   }
// }
function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0]);

  console.log(array);
  const mergedIntervals = [array[0]];
  let mergedIntervalPointer = 0;
  for (let i = 0; i < array.length; i++) {
    const [start, end] = mergedIntervals[mergedIntervalPointer];
    const [nextStart, nextEnd] = array[i];
    const isOverLapping = end >= nextStart;
    if (isOverLapping) {
      const biggerEnd = Math.max(end, nextEnd);
      mergedIntervals[mergedIntervalPointer] = [start, biggerEnd];
    } else {
      mergedIntervals.push(array[i]);
      mergedIntervalPointer++;
    }
  }

  return mergedIntervals;
}
console.log(
  mergeOverlappingIntervals([
    [89, 90],
    [-10, 20],
    [-50, 0],
    [70, 90],
    [90, 91],
    [90, 95]
  ])
);
