function firstDuplicateValue(array) {
  let hashTable = {};
  for (let i = 0; i < array.length; i++) {
    if (hashTable[array[i]] !== undefined) {
      return array[i];
    }
    hashTable[array[i]] = i;
  }
  return -1;
}

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4])) 