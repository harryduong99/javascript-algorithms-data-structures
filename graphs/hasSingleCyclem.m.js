function hasSingleCycle(array) {
  let hashTable = {};

  let count = 0;
  let travelTimes = 0;
  let start = 0;
  let standardizedIndex = 0;

  while (travelTimes < array.length) {
    travelTimes++;
    const newIndex = standardizedIndex + array[standardizedIndex];
    standardizedIndex =
      newIndex >= 0
        ? newIndex % array.length
        : array.length - (Math.abs(newIndex) % array.length);
    if (
      hashTable[standardizedIndex] === undefined ||
      (start === standardizedIndex && travelTimes === array.length)
    ) {
      count++;
    }
    hashTable[standardizedIndex] = true;
  }

  if (count === array.length) {
    return true;
  }

  return false;
}

console.log(hasSingleCycle([0, 1, 1, 1, 1]));
