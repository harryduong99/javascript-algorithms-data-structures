function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => {
    return a - b;
  });
  arrayTwo.sort((a, b) => {
    return a - b;
  });
  console.log(arrayOne)
  console.log(arrayTwo)
  let min = [Number.MIN_VALUE, Number.MAX_VALUE];
  let i = 0,
    j = 0;
  while (i < arrayOne.length && j < arrayTwo.length) {
    if (Math.abs(arrayOne[i] - arrayTwo[j]) < Math.abs(min[0] - min[1])) {
      min = [arrayOne[i], arrayTwo[j]];
    }
    if (arrayOne[i] === arrayTwo[j]) {
      return [arrayOne[i], arrayTwo[j]];
    } else if (arrayOne[i] > arrayTwo[j]) {
      j++;
    } else if (arrayOne[i] < arrayTwo[j]) {
      i++;
    }
  }
  return min;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
