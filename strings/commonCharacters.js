function commonCharacters(strings) {
  let map = {};
  for (const element of strings) {
    let stringHash = {};
    for (let j = 0; j < element.length; j++) {
      if (map[element[j]] === undefined) {
        stringHash[element[j]] = 1;
        map[element[j]] = 1;
      } else {
        if (stringHash[element[j]] === undefined) {
          stringHash[element[j]] = 1;
          map[element[j]] += 1;
        }
        

      }
    }
  }

  console.log(map);

  let result = [];
  for (const key in map) {
    if (map[key] === strings.length) {
      result.push(key);
    }
  }
  // Write your code here.
  return result;
}

let strings = ["abc", "bcd", "cbaccd"];

console.log(commonCharacters(strings));
