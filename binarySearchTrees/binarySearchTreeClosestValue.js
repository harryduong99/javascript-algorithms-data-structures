function findClosestValueInBst(tree, target) {
  // Write your code here.
  minGap = tree.value - target < 0 ? target  - tree.value : tree.value  - target; // init minGap
  result = tree.value; // init result - if no smaller minGap than root => result is root
  recursiveFinding(tree, target, null);

  return result;
}

let minGap;
let result; 

function recursiveFinding(tree, target, gap) {
  currentGap = tree.value - target  < 0 ? target - tree.value : tree.value - target;
  if (currentGap < gap || gap === null) {
    gap = currentGap;
  }

  if (minGap > gap) {
    minGap = gap;
    result = tree.value;
  }
  if (tree.left !== null) {
    recursiveFinding(tree.left, target, gap);
  }

  if (tree.right !== null) {
    recursiveFinding(tree.right, target, gap);
  }
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);

// expect 13
console.log(findClosestValueInBst(root, 12));