// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array) {
  return recursion(array, 1);
  // Write your code here.
}

function recursion(array, depth) {
  let total = 0;
  // console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      total += array[i];
    } else {
      total += recursion(array[i], depth + 1);
    }
  }

  return total * depth;
}

console.log(productSum([1, 2, [3], 4, 5]))