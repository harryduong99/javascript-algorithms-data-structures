// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const map = {};
  let current = descendantOne;
  while (current) {
    map[current.name] = true;
    current = current.ancestor;
  }

  current = descendantTwo;
  while (current) {
    if (map[current.name]) return current;
    else current = current.ancestor;
  }

  return false;
}

console.log(getYoungestCommonAncestor())