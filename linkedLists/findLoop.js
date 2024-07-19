// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findLoop(head) {
  let node = head;

  while (node) {
    if (node.seen) {
      return node;
    } else {
      node.seen = true;
    }

    node = node.next;
  }
}
