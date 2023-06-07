const hashTable = {
  1: [],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["q", "p", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
  0: [],
};

function phoneNumberMnemonics(phoneNumber) {
  recursive(phoneNumber);
  return results;
}

let results = [];
let store = new Set();

function recursive(phoneNumber, index = 0, mnemonic = '') {
    if (index >= phoneNumber.length) {
      if (!store.has(mnemonic)) {
        store.add(mnemonic);
        results.push(mnemonic);
      }
      return;
    }
    if (hashTable[phoneNumber[index]].length === 0) {
      recursive(phoneNumber, index + 1, mnemonic + phoneNumber[index]);
    } else {
      for (let i = 0; i < hashTable[phoneNumber[index]].length; i++) {
        recursive(phoneNumber, index + 1, mnemonic + hashTable[phoneNumber[index]][i]);
      }
    }
}

console.log(phoneNumberMnemonics('1905'));
