function semordnilap(words) {
  let hashTable = {};
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let semord = '';
    for (let j = words[i].length - 1; j >= 0; j--) {
      semord += words[i][j];
    }
    if (hashTable[words[i]]) {
      result.push([words[i], hashTable[words[i]]]);
    }
    hashTable[semord] = words[i];
  }

  // Write your code here.
  return result;
}

console.log(semordnilap(["dog", "desserts", "god", "stressed"]))