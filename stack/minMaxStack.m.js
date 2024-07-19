// Feel free to add new properties and methods to the class.
class MinMaxStack {
  constructor() {
    this.numbers = [];
  }
  peek() {
    return this.numbers[this.numbers.length-1]
  }

  pop() {
    return this.numbers.pop();
  }

  push(number) {
    this.numbers.push(number);
  }

  getMin() {
    let min = this.numbers[this.numbers.length-1]
    for (let i = 0; i < this.numbers.length - 1; i++) {
      if (this.numbers[i] < min) {
        min = this.numbers[i]
      }
    }

    return min;
  }

  getMax() {
    let max = this.numbers[this.numbers.length-1]
    for (let i = 0; i < this.numbers.length - 1; i++) {
      if (this.numbers[i] > max) {
        max = this.numbers[i]
      }
    }

    return max;
  }
}

let a = new MinMaxStack();
a.push(5);
a.push(6);
a.push(7);
console.log(a.getMin());