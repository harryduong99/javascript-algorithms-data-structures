function spiralTraverse(array) {
  let n = array.length;
  let m = array[0].length;
  let x = 0;
  let y = 0;
  let startPoint = 0;
  let result = [];
  let currentAction = 0;
  for (let i = 0; i < n * m; i++) {
    result.push(array[x][y]);
    const xLimit = array.length - startPoint ;
    const yLimit = array[0].length - startPoint;
    if (currentAction === 0 && y < yLimit - 1) {
      console.log(x)
      console.log(y)
      y++;
      continue;
    }
    if (currentAction === 0 && y ===  yLimit - 1) {
      x++;
      currentAction = 1;
      continue;
    }

    if (currentAction === 1 && x < xLimit -1 ) {
      x++;
      continue;
    }

    if (currentAction === 1 && x === xLimit - 1) {
      y--;
      currentAction = 2;
      continue;
    }

    if (currentAction === 2 && y > startPoint) {
      y--;
      continue;
    }
    if (currentAction === 2 && y === startPoint) {
      x--;
      currentAction = 3;
      continue;
    }

    if (currentAction === 3 && x > startPoint + 1) {
      x--;
      continue;
    }

    if (currentAction === 3 && x === startPoint + 1) {
      y++;
      currentAction = 0;
      startPoint++;
      continue;
    }
  }

  return result;
}

console.log(
  spiralTraverse([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ])
);

