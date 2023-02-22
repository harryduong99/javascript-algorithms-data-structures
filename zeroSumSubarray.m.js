// 1, 2, 5, -3, -2, 4
// the secret is: we sum up each number, store it: x =  {1, 3, 8, 5...}, 
// if existing a combination that sum is zero, then the sum must get back to an already existing value in x
function zeroSumSubarray(nums) {
  let total = 0;
  let sums = new Set();
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    sums.add(count);
    count += nums[i];
    if (sums.has(count)) return true;
  }

  return false;
}

console.log(zeroSumSubarray([1, 2, 3, -2, -1]));