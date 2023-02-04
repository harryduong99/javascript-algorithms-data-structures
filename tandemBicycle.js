function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
  const red = redShirtSpeeds.sort((a, b) => a - b);
  const blue = blueShirtSpeeds.sort((a, b) => a - b);
  let total = 0;
  if (fastest) {
    for (let i = 0; i < red.length; i++) {
      total += red[i] < blue[red.length - 1 - i] ? blue[red.length - 1 - i] : red[i];
    }
  } else {
    for (let i = 0; i < red.length; i++) {
      total += red[i] < blue[i] ? blue[i] : red[i];
    }
  }

  return total;
}

console.log(tandemBicycle([5,5,3,9,2], [3,6,7,2,1], true));