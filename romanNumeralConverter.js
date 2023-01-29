function convertToRoman(num) {
  const map = {
    "1000": "M",
    "900": "CM",
    "500": "D",
    "400": "CD",
    "100": "C",
    "90": "XC",
    "50": "L",
    "40": "XL",
    "10": "X",
    "9": "IX",
    "5": "V",
    "4": "IV",
    "1": "I",
  };
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let result = '';
  values.map(value => {
    const divided = parseInt(num/value);
    console.log(divided);
    num = num - divided * value;
    for (let i = 1; i <= divided; i++) {
      result += map[value.toString()]
    }
  });
  return result;
}

console.log(convertToRoman(3999));
