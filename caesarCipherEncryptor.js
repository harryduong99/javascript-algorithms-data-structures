function caesarCipherEncryptor(string, key) {
  // Write your code here.
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let result = '';
  for (let i = 0; i < string.length; i++) {
    const currentIndex = alphabet.indexOf(string[i]);
    const targetIndex = currentIndex + key > 25 ? (currentIndex + key) % 26 : currentIndex + key;
    result += alphabet[targetIndex];
  }

  return result;
}

console.log(caesarCipherEncryptor('xyz', 2));