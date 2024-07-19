class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function evaluateExpressionTree(tree) {
  const operators = {
    '-1': "+",
    '-2': "-",
    '-3': "/",
    '-4': "*"
  }

  if (tree.value > -1) return tree.value;
  const res = Math.trunc(eval(evaluateExpressionTree(tree.left) + operators[tree.value] + evaluateExpressionTree(tree.right)));
  return res;
}