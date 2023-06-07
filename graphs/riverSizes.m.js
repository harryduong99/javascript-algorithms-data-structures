function riverSizes(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j]) {
        length = 0;
        recursive(i, j, matrix);
        result.push(length);
      }
    }
  }

  return result;
}

let length = 0;

function recursive(row, column, matrix) {
  if (!matrix[row][column]) {
    return;
  }
  length++;
  matrix[row][column] = 0;
  if (row < matrix.length - 1) {
    recursive(row + 1, column, matrix);
  }
  if (column < matrix[0].length - 1) {
    recursive(row, column + 1, matrix);
  }
  if (row > 0) {
    recursive(row - 1, column, matrix);
  }
  if (column > 0) {
    recursive(row, column - 1, matrix);
  }
}

console.log(
  riverSizes([
    [1, 1, 0, 0, 0, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 0, 1],
    [0, 1, 1, 0, 0, 0, 1, 1],
  ])
);
