function invertBinaryTree(tree) {
  if (!tree) return null;

  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;

  // non primitive data type like object will be treated as reference value by JS,
  // then just need to update the leaf, the original tree will be updated
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);

  return tree;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//  suggested solution

function invertBinaryTree2(tree) {
  if (!tree) return null;

  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;

  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);

  return tree;
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


console.log(invertBinaryTree(root));
/*


 */