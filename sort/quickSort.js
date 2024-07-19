function quickSort(array) {
  if (array.length === 0) {
    return array;
  } else {
    let pivot = array[0];
    let less = [];
    let equal = [];
    let more = [];

    for (let i of array) {
      if (i < pivot) {
        less.push(i);
      }
      if (i == pivot) {
        equal.push(i);
      }
      if (i > pivot) {
        more.push(i);
      }
    }
    return [...quickSort(less), ...equal, ...quickSort(more)];
  }
}
