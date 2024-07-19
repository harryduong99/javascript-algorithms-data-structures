function minimumCharactersForWords(words) {
  let hash = {};
  let result = [];
  for (const word of words) {
    let hashWord = {};
    for (const element of word) {
      if (hashWord[element] === undefined) {
        hashWord[element] = 1;
        if (hash[element] === undefined) {
          result.push(element);
          hash[element] = 1;
        }
      } else {
        hashWord[element] += 1;
        hash[element] += 1;
        if (hashWord[element] >= hash[element]) {
          result.push(element);
        }
      }
    }
  }
  return result;
}

let words = ["this", "that", "did", "deed", "them", "a"];

console.log(minimumCharactersForWords(words));