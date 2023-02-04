function nodeDepths(root) {
  sumDepth = 0;
  recursionCheckTree(root, -1);

  return sumDepth;
  // Write your code here.
}

let sumDepth = 0;

function recursionCheckTree(tree, currentDepth) {
  currentDepth += 1;
  sumDepth += currentDepth;
  if (tree.left === null && tree.right === null) {
    return;
  }

  if (tree.left !== null) {
    recursionCheckTree(tree.left, currentDepth);
  }
  if (tree.right !== null) {
    recursionCheckTree(tree.right, currentDepth);
  }
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(4);
root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);
root.left.right = new BinaryTree(5);
root.right = new BinaryTree(3);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);

console.log(nodeDepths(root));