// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  recursionCheckTree(root, 0);

  return result;
  // Write your code here.
}
let result = [];

function recursionCheckTree(tree, sum) {
  sum += tree.value;
  if (tree.left === null && tree.right === null) {
    result.push(sum);
    return;
  }

  if (tree.left !== null) {
    console.log(tree);
    recursionCheckTree(tree.left, sum);
  }
  if (tree.right !== null) {
    console.log(tree);
    recursionCheckTree(tree.right, sum);
  }
}

const root = new BinaryTree(1);
root.left = null;
// root.left.left = new BinaryTree(4);
// root.left.left.left = new BinaryTree(8);
// root.left.left.right = new BinaryTree(9);
// root.left.right = new BinaryTree(5);
// root.left.right.left = new BinaryTree(10);
root.right = null
// root.right.left = new BinaryTree(6);
// root.right.right = new BinaryTree(7);

console.log(branchSums(root));
