// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  addMany(values) {
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    for (const value of values) {
      current.next = new LinkedList(value);
      current = current.next;
    }
    return this;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let curr = linkedList;
  while (curr.next) {
    if (curr.value === curr.next.value) {
      curr.next = curr.next.next
    } else {
      curr = curr.next;
    }
  }
  return linkedList;
}

const input = new LinkedList(1).addMany([1, 3, 4, 4, 4, 5, 6, 6]);
console.log(removeDuplicatesFromLinkedList(input));