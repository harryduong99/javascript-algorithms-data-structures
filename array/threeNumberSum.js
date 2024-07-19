function threeNumberSum(array, targetSum) {
  array.sort(function(a, b) {
    return a - b;
  });
  let result = [];
  for (let i = 0; i < array.length - 2; i++) {
    const target2Sum = targetSum - array[i];
    let hash = {};
    for (let j = i + 1; j < array.length; j++) {
      if (hash[array[j]]) {
        result.push([array[i], hash[array[j]], array[j]]);
      }
      if (!hash[array[j]]) {
        hash[target2Sum - array[j]] = array[j];
      }
    }
  }
  
  for (let m = 0; m < result.length; m++) {
    result[m].sort((a, b) => {
      return a - b;
    });
  }
  return result;
}

// function threeNumberSum(array, targetSum) {
//   array.sort(function(a, b) {
//     return a - b;
//   });
//   let result = [];
//   for (let i = 0; i < array.length - 2; i++) {
//     let left = i + 1; right = array.length - 1;
//     while (left < right) {
//       const currentSum = array[i] + array[left] + array[right];
//       if (currentSum === targetSum) result.push([array[i], array[left++], array[right--]]);
//       else if (currentSum < targetSum) left += 1;
//       else if (currentSum > targetSum) right -= 1;
//     }
//   }
  
//   return result;
// }


console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
