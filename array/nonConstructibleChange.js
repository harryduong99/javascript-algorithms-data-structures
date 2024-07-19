function nonConstructibleChange(coins) {
  if (coins === undefined || coins.length === 0) {
    return 1;
  }
  let sortedCoins = coins.sort(function(a, b){return a-b});
  let minimumCreatable = 0;
  for (let i=0; i< sortedCoins.length; i++) {
    if (sortedCoins[i] > minimumCreatable + 1) {
      return minimumCreatable + 1;
    }
    minimumCreatable += sortedCoins[i];
  }

  return minimumCreatable + 1;
}

let coins = [5,7,1,1,2,3,22];

console.log(nonConstructibleChange(coins));