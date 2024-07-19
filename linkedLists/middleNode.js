// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

function middleNode(linkedList) {
  let max = recursive(linkedList);

  return go(linkedList, max);
}


function go(linkedList, max, count = 0) {
  if (count >= max - 1) {
    return linkedList;
  }
  count++;

  return go(linkedList.next, max, count);
}

function recursive(linkedList, count = 0) {
  if (linkedList === null) {
    return Math.ceil((count + 1)/2);
  }
  count++;

  return recursive(linkedList.next, count);
}

let list = new LinkedList(2);
list.next = new LinkedList(7);
list.next.next = new LinkedList(3);
list.next.next.next = new LinkedList(5);

console.log(middleNode(list));