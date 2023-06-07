function threeNumberSort(array, order) {
  let idx = 0;

  for (let i = 0; i < order.length; i++) {
    for (let j = idx; i < array.length; j++) {
      if (arr[j] === order[i]) {
        swap(idx, j , arr);
        idx++;
      }
    }
  }

  return arr;
}

function swap(idx1, idx2, array) {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
}