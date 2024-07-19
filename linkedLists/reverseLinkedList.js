// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head, prev = null) {
  if (head === null) return prev;

  const next = head.next;
  head.next = prev;

  return reverseLinkedList(next, head)
}
