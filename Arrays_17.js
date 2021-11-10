class TriangularArray {
  constructor(numRows) {
    this.numRows = numRows;
    this.values = new Array((this.numRows * (this.numRows - 1)) / 2);
  }
  mapRowAndColumn(row, column) {
    console.log(this);
    if (row === column) {
      throw new Error("The row and column indexes cannot be the same");
    }
    if (row > this.numRows) {
      console.log("AAA");
      throw new Error("The row must be smaller than the number of rows");
    }
    if (column > this.numRows) {
      throw new Error("The column must be smaller than the number of rows");
    }
    if (row < column) {
      [row, column] = [column, row];
    }

    return ((row - 1) * (row - 2)) / 2 + column - 1;
  }
  setValue(value, row, column) {
    this.values[this.mapRowAndColumn(row, column)] = value;
  }
  getValue(row, column) {
    return this.values[this.mapRowAndColumn(row, column)];
  }
}

module.exports = { TriangularArray };
