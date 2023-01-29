// https://www.geeksforgeeks.org/backtracking-to-find-all-subsets/
// https://www.topcoder.com/thrive/articles/print-all-subset-for-set-backtracking-and-bitmasking-approach

function findSubsets(subset, nums, output, index)
{
  
    // Base Condition
    if (index == nums.length) {
        subset.push(output);
        return;
    }
  
    // Not Including Value which is at Index
    findSubsets(subset, nums, [...output], index + 1);
  
    // Including Value which is at Index
    output.push(nums[index]);
    findSubsets(subset, nums, [...output], index + 1);
}
let subset = [];
let input = [1,2,3];

findSubsets(subset, input, [], 0);


// Printing Subset
for (let i = 0; i < subset.length; i++) {
  for (let j = 0; j < subset[i].length; j++) {
      console.log(subset[i][j] + " ");
  }
  console.log("<br>");
}