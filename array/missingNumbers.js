function missingNumbers(nums) {
  nums.push(1);
  nums.push(1);
  for (let i = 0; i < nums.length - 2; i++) {
    let num = Math.abs(nums[i]);
    nums[num - 1] = -Math.abs(nums[num-1]);
  }

  const ans = [];
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] > 0) {
      ans.push(j+ 1);
    }
  }

  return ans;
}