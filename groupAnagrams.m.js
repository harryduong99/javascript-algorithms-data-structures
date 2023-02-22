function groupAnagrams(words) {
  let hashTable = {};
  for (const word of words) {
    // Time Complexity: sort is O(N logN), split and join is O(N), so time complexity is O(N logN). Space Complexity is O(N).
    const sorted = word.split('').sort().join('');
    if (hashTable[sorted]) {
      hashTable[sorted].push(word)
    } else {
      hashTable[sorted] = [word];
    }
  }
  let result = [];

  // OR USING Object.values(hashTable)
  for (const key in hashTable) {
    result.push(hashTable[key]);
  }
  return result;
}

console.log(groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]))
