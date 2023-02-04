function classPhotos(redShirtHeights, blueShirtHeights) {
  const red = redShirtHeights.sort((a, b) => a - b);
  const blue = blueShirtHeights.sort((a, b) => a - b);
  const isRedFront = red[0] < blue[0];
  if (red[0] == blue[0]) {
    return false;
  }

  for (let i = 0; i < red.length; i++) {
    if (isRedFront) {
      if (red[i] >= blue[i]) {
        return false;
      }
    } else {
      if (red[i] <= blue[i]) {
        return false;
      }
    }
  }
  // Write your code here.
  return true;
}

let red = [5,8,1,3,4];
let blue = [6,9,2,4,5];
console.log(classPhotos(red, blue));