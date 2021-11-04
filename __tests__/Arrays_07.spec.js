const { setZeroes } = require("../Arrays_07");

describe("If any element in an MxN matrix is zero, make that column and row all zeroes", () => {
  it("Matrix containing one zero", () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 0, 8],
    ];
    setZeroes(matrix);
    expect(matrix).toStrictEqual([
      [1, 2, 0, 4],
      [0, 0, 0, 0],
    ]);
  });

  it("Matrix containing two zeroes", () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 0, 8],
      [1, 2, 3, 4],
      [5, 0, 9, 8],
    ];
    setZeroes(matrix);
    expect(matrix).toStrictEqual([
      [1, 0, 0, 4],
      [0, 0, 0, 0],
      [1, 0, 0, 4],
      [0, 0, 0, 0],
    ]);
  });

  it("Matrix containing four zeroes", () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 0, 0, 8],
      [1, 0, 0, 4],
      [5, 1, 9, 8],
    ];
    setZeroes(matrix);
    expect(matrix).toStrictEqual([
      [1, 0, 0, 4],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [5, 0, 0, 8],
    ]);
  });
});
