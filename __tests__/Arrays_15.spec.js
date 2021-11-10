const { searchMatrix } = require("../Arrays_15");

describe("Search function in an MxN matrix that is in ascending order both on rows and columns", () => {
  it("Find the position of the element 1 in a 3x4", () => {
    const matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ];
    expect(searchMatrix(matrix, 1)).toEqual([1, 1]);
  });

  it("Find the position of the element 11 in a 3x2", () => {
    const matrix = [
      [1, 3],
      [10, 11],
      [23, 30],
    ];
    expect(searchMatrix(matrix, 11)).toEqual([2, 2]);
  });

  it("Find the position of the element 1 in a 1x6", () => {
    const matrix = [[1, 2, 3, 4, 5, 6]];
    expect(searchMatrix(matrix, 7)).toBe(-1);
  });
});
