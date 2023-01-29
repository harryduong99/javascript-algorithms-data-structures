function isValidSubsequence(array, sequence) {
  // Write your code here.
  if (array.length < sequence.length) {
    return false;
  }
  let map = {}
  for (let i = 0; i < array.length; i++) {
    let pos = [];
    if (map[array[i]] !== undefined) {
      pos = map[array[i]];
    }
    pos.push(i);
    map[array[i]] = pos;
  }

  let highestPos = 0;
  for (let j = 0; j < sequence.length; j++) {
    let postions = map[sequence[j]]
    console.log(postions);
    if (postions === undefined || postions.length === 0) {
      return false;
    }

    if (highestPos > postions[postions.length - 1]) {
      return false;
    }
    let currentPos = postions.shift();
    map[sequence[j]] = postions;
    highestPos = currentPos;
    // delete map[sequence[j]];
  }

  return true;
}

let array = [1, 1, 1, 1, 1];
let sequence = [1, 1, 1];

console.log(isValidSubsequence(array, sequence));