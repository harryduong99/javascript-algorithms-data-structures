// function searchInSortedMatrix(matrix, target) {
//   if (matrix.length === 0) {
//     return [-1, -1]
//   }
//   let i = 0;
//   const min = Math.min(matrix.length, matrix[0].length)
//   while ( i < min ) {
//     if (matrix[i][i] < target) {
//       i++;
//       continue;
//     }
//     if (matrix[i][i] === target) {
//       return [i, i];
//     }

//     if (matrix[i][i] > target) {
//       for (let m = 0; m < i; m++) {
//         if (matrix[m][i] === target) {
//           return [m, i]
//         }
//         if (matrix[i][m] === target) {
//           return [i, m]
//         }
//       }
//     }
//   }
//   console.log(i)
//   if (i === matrix.length) {
//     for (let j = i; j < matrix[0].length; j++) {
//       console.log(i);
//       console.log(j);
//       console.log('asdf');
//       if (matrix[i][j] === target) {
//         return [i, j];
//       }
//     }
//   }

//   if (i === matrix[0].length) {
//     for (let k = i; k < matrix.length; k++) {
//       if (matrix[k][i] === target) {
//         return [k, i];
//       }
//     }
//   }
// }

function searchInSortedMatrix(matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;
  while(row < matrix.length && col >= 0) {
    if (matrix[row][col] > target) {
      col--;
    } else if (matrix[row][col] < target) {
      col = matrix[0].length - 1;
      row++;
    } else {
      return [row, col];
    }
  }

  return [-1, -1];
}

console.log(searchInSortedMatrix([
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004]
], 1003));