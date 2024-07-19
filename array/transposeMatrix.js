function transposeMatrix(matrix) {
  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let x = [];
    for (let j = 0; j < matrix.length; j++) {
      x.push(matrix[j][i]);
    }
    result.push(x);
  }
  return result;
}

const matrix = [[1,2,5], [4,5,6], [7,8,9]];

console.log(transposeMatrix(matrix));