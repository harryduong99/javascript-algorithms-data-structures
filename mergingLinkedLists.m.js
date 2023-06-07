// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergingLinkedLists(linkedListOne, linkedListTwo) {
  console.log(linkedListOne)
  const listOneNodes = new Set();
  let currentNodeOne = linkedListOne;
  while(currentNodeOne !== null) {
    listOneNodes.add(currentNodeOne);
    currentNodeOne = currentNodeOne.next;
  }

  console.log(listOneNodes);

  let currentNodeTwo = linkedListTwo;
  while(currentNodeTwo !== null) {
    if (listOneNodes.has(currentNodeTwo)) return currentNodeTwo;
    currentNodeTwo = currentNodeTwo.next;
  }

  return null;
}

let one = new LinkedList(2);
one.next = new LinkedList(3);
one.next.next = new LinkedList(1);
one.next.next.next = new LinkedList(4);
one.next.next.next.next = null;

let two = new LinkedList(8);
two.next = new LinkedList(7);
two.next.next = new LinkedList(1);
two.next.next.next = new LinkedList(4);
two.next.next.next.next = null;
console.log(mergingLinkedLists(one, two));