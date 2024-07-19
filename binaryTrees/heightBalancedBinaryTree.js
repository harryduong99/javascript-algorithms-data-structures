// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// to determine if the tree is a balanced tree, we have to travel through all nodes for sure
function heightBalancedBinaryTree(tree) {
  isBalanced = false;
  calc(tree);
  return isBalanced;
}

let isBalanced;

function calc(curr) {
  if (!curr) return 0;

  const leftHeight = calc(curr.left);
  const rightHeight = calc(curr.right); 

  console.log("curr value: ", curr.value);
  console.log("curr leftHeight: ", leftHeight);
  console.log("curr rightHeight: ", rightHeight);

  if (Math.abs(leftHeight - rightHeight) > 1) {
    console.log("it here: ", curr.value);
    isBalanced = false;
  }

  return Math.max(leftHeight, rightHeight) + 1; // plus 1 because if the curr is null we are returning 0
}

// let root = new BinaryTree(1);
// root.left = new BinaryTree(2);
// root.left.right = new BinaryTree(5);
// root.left.right.left = new BinaryTree(7);
// root.left.right.right = new BinaryTree(8);
// root.left.right.right.right = new BinaryTree(10);
// root.left.left = new BinaryTree(4);
// root.right = new BinaryTree(3);
// root.right.right = new BinaryTree(6);

let root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(4);
root.left.left.left = new BinaryTree(8);
root.left.right = new BinaryTree(5);
root.left.right.left = new BinaryTree(12);
root.right = new BinaryTree(3);
root.right.left = new BinaryTree(6);
root.right.left.left = new BinaryTree(9);
root.right.left.right = new BinaryTree(10);
root.right.right = new BinaryTree(7);

console.log(heightBalancedBinaryTree(root));