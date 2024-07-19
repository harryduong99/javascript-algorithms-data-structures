function blackjackProbability(target, startingHand) {
  memo = {}
  return parseFloat(recursion(target, startingHand).toFixed(3));
}

let memo;

function recursion(target, hand) {
  if (hand in memo) return memo[hand]
  if (hand > target) return 1
  if (hand + 4 >= target) return 0

  let result = 0

  for (let drawn = 1; drawn <= 10; drawn++)
    result += 0.1 * recursion(target, hand + drawn)

  memo[hand] = result

  return result;
}