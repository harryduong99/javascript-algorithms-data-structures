// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BinaryTree = BinaryTree;

function mergeBinaryTrees(tree1, tree2) {
  if (!tree1 && !tree2) return null;
  if (!tree1) return tree2;
  if (!tree2) return tree1;

  const sum = tree1.value + tree2.value;
  const tree = new BinaryTree(sum);
  tree.left = mergeBinaryTrees(tree1.left, tree2.left);
  tree.right = mergeBinaryTrees(tree1.right, tree2.right);

  return tree;
}

let hashMap = {};

function recursive(tree, result, path = "") {
  if (!tree) return null;

  if (hashMap[path] !== undefined) {
    hashMap[path] = hashMap[path] += tree.value;
  } else {
    hashMap[path] = tree.value;
  }

  if (tree.left !== null) {
    const leftPath = !path.length ? "left" : path + ".left";
    if (hashMap[leftPath] !== undefined) {
      console.log(hashMap);
      console.log("result ", result);
      console.log("leftPath ", leftPath);
      result.left = new BinaryTree(hashMap[leftPath] + tree.left.value);
    } else {
      result.left = new BinaryTree(tree.left.value);
    }
    recursive(tree.left, result.left, leftPath);
  }

  if (tree.right !== null) {
    const rightPath = !path.length ? "right" : path + ".right";

    if (hashMap[rightPath] !== undefined) {
      result.right = new BinaryTree(hashMap[rightPath] + tree.right.value);
    } else {
      result.right = new BinaryTree(tree.right.value);
    }
    recursive(tree.right, result.right, rightPath);
  }
}

// let tree1 = new BinaryTree(1);
// tree1.left = new BinaryTree(3);
// tree1.left.left = new BinaryTree(7);
// tree1.left.right = new BinaryTree(4);
// tree1.right = new BinaryTree(2);
// let tree2 = new BinaryTree(1);
// tree2.left = new BinaryTree(5);
// tree2.left.left = new BinaryTree(2);
// tree2.right = new BinaryTree(9);
// tree2.right.left = new BinaryTree(7);
// tree2.right.right = new BinaryTree(6);

let tree1 = new BinaryTree(1);
tree1.left = new BinaryTree(3);
tree1.left.left = new BinaryTree(5);
tree1.right = new BinaryTree(2);

let tree2 = new BinaryTree(2);
tree2.left = new BinaryTree(3);
tree2.left.right = new BinaryTree(4);
tree2.right = new BinaryTree(6);
tree2.right.right = new BinaryTree(7);

console.log(mergeBinaryTrees(tree1, tree2));