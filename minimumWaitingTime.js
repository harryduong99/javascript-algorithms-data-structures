function minimumWaitingTime(queries) {
  let total = 0;
  const sortedQueries = queries.sort((a, b) => a - b);
  for (let i = 0; i < sortedQueries.length; i++) {
    total += sortedQueries[i] * (sortedQueries.length - 1 - i);
  }
  // Write your code here.
  return total;
}

console.log(minimumWaitingTime([3, 2, 1, 2, 6]));


// [3,2,1,2,6] => [1,2,2,3,6]
// => 0 + 1 + (1 + 2) + (1 + 2 + 2) + (1+2+2+3)
// = (1 * 4) + (2 * 3) + (2 * 2) + (3 * 1)