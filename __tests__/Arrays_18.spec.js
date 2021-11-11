const { storeSparseMatrix } = require("../Arrays_18");

describe("Optimize storing a sparse matrix", () => {
  it("Should store an 7x6 Matrix", () => {
    let sparseMatrix = [
      [0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [-2, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, -3, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1],
    ];
    expect(storeSparseMatrix(sparseMatrix)).toStrictEqual([
      [7, 6, 5],
      [1, 2, 1],
      [3, 1, -2],
      [3, 4, 1],
      [6, 2, -3],
      [7, 6, 1],
    ]);
  });
  it("Should store an 5x8 Matrix", () => {
    let sparseMatrix = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, -4, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    expect(storeSparseMatrix(sparseMatrix)).toStrictEqual([
      [5, 8, 2],
      [2, 2, 1],
      [4, 5, -4],
    ]);
  });
  it("Should store an 3x15 Matrix", () => {
    let sparseMatrix = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
      [3, 4, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(storeSparseMatrix(sparseMatrix)).toStrictEqual([
      [15, 3, 5],
      [2, 2, 1],
      [7, 2, 1],
      [9, 1, 3],
      [9, 2, 4],
      [12, 2, 1],
    ]);
  });
});
