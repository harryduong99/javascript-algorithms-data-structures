function powerset(array) {
  recursive(array, [], array);
  return result;
}

let result = [[]];
function recursive(array, currentCombine = [], left = []) {
  if (array.length === 0) {
    return result;
  }

  for (let i = 0; i < left.length; i++) {
    const temp = [...currentCombine];
    temp.push(left[i]);
    result.push(temp);
    recursive(array, temp, left.slice(i + 1, left.length));
  }
}

console.log(powerset([1, 2, 3]));
