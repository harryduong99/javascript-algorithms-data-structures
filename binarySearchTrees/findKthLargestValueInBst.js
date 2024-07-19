class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  let kthLargestValue = null;

  function helper(tree) {
    if (!tree) return;

    helper(tree.right);
    if (k === 0 ) return;
    kthLargestValue = tree.value;
    k--;
    helper(tree.left)
  }

  helper(tree);
  return kthLargestValue;
}