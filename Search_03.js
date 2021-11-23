class SecondLargest {
  constructor(initialState = 0) {
    let first = -Infinity;
    let second = -Infinity;

    for (let n of initialState) {
      if (n > first) {
        [first, second] = [n, first];
      } else if (n > second) {
        second = n;
      }
    }
    this.first = first;
    this.second = second;
  }
  add(n) {
    if (n > this.first) {
      [this.first, this.second] = [n, this.first];
    } else if (n > this.second) {
      this.second = n;
    }
    return this.second;
  }
}

module.exports = {
  SecondLargest,
};
