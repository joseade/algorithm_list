const { findMaxArea } = require("../Arrays_03");

describe("Find the gratest area formed by rectangles of 1's ina a Binary matrix", () => {
  it("should find greatest area in a 3x3 matrix", () => {
    let matrix = [
      [0, 1, 0],
      [0, 1, 1],
      [0, 1, 1],
    ];
    expect(findMaxArea(matrix)).toBe(4);
  });

  it("should find greatest area in a 9x14 matrix", () => {
    let matrix = [
      [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    ];
    expect(findMaxArea(matrix)).toBe(22);
  });

  it("should find greatest area in a 4x6 matrix", () => {
    let matrix = [
      [1, 0, 0, 1, 1, 1],
      [1, 0, 1, 1, 0, 1],
      [0, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1],
    ];
    expect(findMaxArea(matrix)).toBe(8);
  });

  it("should find greatest area in a matrix containing zeroes", () => {
    let matrix = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(findMaxArea(matrix)).toBe(0);
  });
});
