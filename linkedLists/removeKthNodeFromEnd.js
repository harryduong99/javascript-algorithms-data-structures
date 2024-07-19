// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function removeKthNodeFromEnd(head, k) {
  // Write your code here.
  let nodeBefore = head;
  let counter = 0;
  let nodePointer = head;

  while (nodePointer !== null) {
    if (counter > k) {
      nodeBefore = nodeBefore.next;
    }
    nodePointer = nodePointer.next;
    counter++;
  }

  if (k >= counter) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }

  nodeBefore.next = nodeBefore.next.next;
}

function firstRecursion(list, count = 0) {
  if (list === null) {
    return count;
  }
  count++
  return firstRecursion(list.next, count);
}

let result;

function secondRecursion(list, stop, count = 0, result) {
  console.log(count);
  if (count === stop - 1) {
    console.log(list);
    const next = list.next;
    list.next = next.next;
    return result.next = list;
  }

  if (count > 0) {
    result.next = new LinkedList(list.value);
  }

  count++;

  return secondRecursion(list.next, stop, count, result);
}

function resolve() {
  let nodeBefore = head;
  let counter = 0;
}

let list = new LinkedList(0);
list.next = new LinkedList(1);
list.next.next = new LinkedList(2);
list.next.next.next = new LinkedList(3);
list.next.next.next.next = new LinkedList(4);
list.next.next.next.next.next = new LinkedList(5);
list.next.next.next.next.next.next = new LinkedList(6);
list.next.next.next.next.next.next.next = new LinkedList(7);
list.next.next.next.next.next.next.next.next = new LinkedList(8);
list.next.next.next.next.next.next.next.next.next = new LinkedList(9);

console.log(removeKthNodeFromEnd(list, 4));