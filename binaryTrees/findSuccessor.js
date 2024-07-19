// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

/*
APPROACH: recursion OR STACK
we can use STACK because we are aiming to travel from leaf to root (for the result), but we have to go down from root to leafs for sure
=> with the LIFO of stack => the leaf is the last one in, and can be taken out first to put to the result list
 WITH STACK APPROACH, We DON't NEED TO SPECIFY this.parent IN THE BINARY TREE
*/

/**
Algorithm Inorder(tree)

1. Traverse the left subtree, i.e., call Inorder(left->subtree)
2. Visit the root.
3. Traverse the right subtree, i.e., call Inorder(right->subtree)
 */

// node is value (int)
function findSuccessorReturnValue(tree, node) {
  let results = [];
  let stack = [];
  let curr = tree;

  while (curr || stack.length !== 0) {
    // if the curr is null (meaning the right is null) but stack is not empty yet
    while (curr) {
      // keep travel left
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    results.push(curr.value);
    // if math the target node => the latest is what we want
    if (results[results.length - 2] === node) {
      return results[results.length - 1];
    }
    curr = curr.right; // check right, => travel left for this right in the next loop
  }

  return null;
}

// node is BinaryTree object
function findSuccessor(tree, node) {
  let resultNodes = [];
  let stack = [];
  let curr = tree;
  let isNextIsResult = false;

  while (curr || stack.length !== 0) {
    // if the curr is null (meaning the right is null) but stack is not empty yet
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      if (isNextIsResult) {
        return curr;
      }
      // if math the target node => the latest is what we want
      if (curr.value === node.value) {
        isNextIsResult = true;
      }

      resultNodes.push(curr);
      // check right, => travel left for this right in the next loop
      curr = curr.right;
    }
  }

  return null;
}

// let root = new BinaryTree(1);
// root.left = new BinaryTree(2);
// root.left.left = new BinaryTree(4);
// root.left.right = new BinaryTree(5);
// root.left.left.left = new BinaryTree(6);
// root.right = new BinaryTree(3);

let root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.left.left = new BinaryTree(6);
root.left.right = new BinaryTree(5);

console.log(findSuccessor(root, new BinaryTree(5)));

// 1 (root1) => 2 (root2) => 4 (root3) => 6 => 4 (root3) => 2 (root2) => 5 => 1 (root1) => 3
