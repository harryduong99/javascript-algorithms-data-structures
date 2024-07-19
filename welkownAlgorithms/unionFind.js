class UnionFind {
  constructor() {
    this.sets = {};
    this.map = {};
  }

  createSet(value) {
    this.sets[value] = value;
    this.map[value] = [value];
  }

  find(value) {
    return this.sets[values];
  }

  union(valueOne, valueTwo) {
    if (
      typeof this.sets[valueOne] === "undefined" ||
      typeof this.sets[valueTwo] === "undefined"
    )
      return;

    if (this.sets[valueOne] !== this.sets[valueTwo]) {
      const key1 = this.sets[valueOne];
      const key2 = this.sets[valueTwo];
      const unionValues = this.map[key1].concat(this.map[key2]);
      this.map[key1] = unionValues;
      this.map[key2] = null;
      for (const v of unionValues) {
        this.sets[v] = key1;
      }
    }
  }
}
