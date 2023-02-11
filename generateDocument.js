function generateDocument(characters, document) {
  let hashTable = {};
  for (let i = 0; i < characters.length; i++) {
    if (!hashTable[characters[i]]) {
      hashTable[characters[i]] = 1;
    } else {
      hashTable[characters[i]] += 1;
    }
  }

  let docs = {}
  for (let j = 0; j < document.length; j++) {
    if (hashTable[document[j]]) {
      hashTable[document[j]] -= 1;
    } else {
      return false
    }
  }
  return true;
}

console.log(generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!"))