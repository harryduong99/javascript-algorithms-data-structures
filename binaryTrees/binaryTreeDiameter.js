// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  const diameter = { max: -Infinity };
  calc(tree, diameter)
  return diameter.max;
}

function calc(tree, diameter) {
  if (!tree) return 0; // the stop point for recursive (last node counted then get back to higher calc())

  const leftCount = calc(tree.left, diameter);
  const rightCount = calc(tree.right, diameter);

  diameter.max = Math.max(leftCount + rightCount, diameter.max);

  return Math.max(leftCount + 1, rightCount + 1);
}

let root = new BinaryTree(1);
root.left = new BinaryTree(3);
root.left.left = new BinaryTree(7);
root.left.left.left = new BinaryTree(8);
root.left.left.left.left = new BinaryTree(9);
root.left.right = new BinaryTree(4);
root.left.right.right = new BinaryTree(5);
root.left.right.right.right = new BinaryTree(6);
root.right = new BinaryTree(2);

console.log(binaryTreeDiameter(root));