// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let currentNodeOne = linkedListOne;
  let currentNodeTwo = linkedListTwo;
  let numberOne = "";
  let numberTwo = "";

  while (currentNodeOne !== null) {
    numberOne = currentNodeOne.value + numberOne;
    currentNodeOne = currentNodeOne.next;
  }
  while (currentNodeTwo !== null) {
    numberTwo = currentNodeTwo.value + numberTwo;
    currentNodeTwo = currentNodeTwo.next;
  }

  const total = (Number(numberOne) + Number(numberTwo)).toString();

  let node = null;
  let temp;
  for (let i = 0; i < total.length; i++) {
    if (!node) {
      node = new LinkedList(Number(total[i]));
    } else {
      temp = new LinkedList(Number(total[i]));
      temp.next = node;
      node = temp;
    }
  }
  return node;
}

let one = new LinkedList(2);
one.next = new LinkedList(4);
one.next.next = new LinkedList(7);
one.next.next.next = new LinkedList(1);
one.next.next.next.next = null;

let two = new LinkedList(9);
two.next = new LinkedList(4);
two.next.next = new LinkedList(5);
two.next.next.next = null;
console.log(sumOfLinkedLists(one, two));
