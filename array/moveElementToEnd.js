function moveElementToEnd(array, toMove) {
  // Write your code here.
  let length = array.length;
  let i = 0;
  // CShouldn't use for loop since we are going to change the original array, use while instead
  while (i < length) {
    if (array[i] === toMove) {
      // can use swap position to avoid using this
      array.splice(i, 1);
      array.push(toMove);
      length -= 1;
    } else {
      i++;
    }
  }

  return array;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
