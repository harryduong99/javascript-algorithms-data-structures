// function minNumberOfCoinsForChange(n, denoms) {
//   const numOfCoins = new Array(n+1).fill(Infinity);
//   numOfCoins[0] = 0;
//   for (let denom of denoms) {
//     for (let amount = 0; amount < numOfCoins.length; amount++) {
//       if (denom <= amount) {
//         numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1);
//       }
//     }
//   }

//   return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
// }

function minNumberOfCoinsForChange(n, denoms) {
  const result = getMinCoins(n, denoms);
  return result === Infinity ? -1 : result;
}

function getMinCoins(amount, coins, cache = {}) {
  if (amount < 0) return Infinity;
  if (amount === 0) return 0;
  if (amount in cache) return cache[amount];

  let minCoins = Infinity;

  for (const coin of coins) {
    const change = 1 + getMinCoins(amount - coin, coins, cache);
    minCoins = Math.min(minCoins, change);
  }

  cache[amount] = minCoins;

  return minCoins;
}

console.log(minNumberOfCoinsForChange(7, [1, 5, 10]));
