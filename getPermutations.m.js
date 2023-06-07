function getPermutations(array) {
  const permutations = [];
  permutationHelper(0, array, permutations);
  return permutations;
}

function permutationHelper(i, array, permutations = []) {
  if (i === array.length - 1) {
    permutations.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      swap(i, j, array);
      permutationHelper(i+1, array, permutations);
      swap(i, j, array);
    }
  }
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(getPermutations([1,2,3]))