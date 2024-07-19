// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BinaryTree = BinaryTree;

function symmetricalTree(tree) {
  flag = true;
  recursive(tree.left, tree.right);
  return flag;
}

let flag;

function recursive(tree1, tree2) {
  if (tree1 === null && tree2 === null) return;

  if (tree2 === null || tree1 == null) {
    flag = false;
    return;
  };

  if (tree1.value !== tree2.value) {
    flag = false;
    return;
  }

  recursive(tree1.left, tree2.right);
  recursive(tree1.right, tree2.left);
}

let root = new BinaryTree(1);
// root.left = new BinaryTree(2);
// root.left.left = new BinaryTree(3);
// root.left.left.left = new BinaryTree(5);
// root.left.left.right = new BinaryTree(6);
// root.left.right = new BinaryTree(4);
// root.right = new BinaryTree(2);
// root.right.right = new BinaryTree(3);
// root.right.right.right = new BinaryTree(5);
// root.right.right.left = new BinaryTree(6);
// root.right.left = new BinaryTree(10);

root.left = 2;
console.log(symmetricalTree(root));
/*
  func()
  if tree1 && tree2 === null => return null?
  tree1.left === tree2.right
  tree2.left === tree1.right

  func(tree1.left, tree2.right)
  func(tree1.right, tree2.left)


 */
