const { obtainGroupOfOne, obtainGroupOfOnes } = require("../Arrays_04");

describe("Find groups of 1s in an MxN matrix", () => {
  it("should find four groups of ones", () => {
    let matrix = [
      [1, 1, 0, 0, 1],
      [1, 0, 0, 1, 0],
      [1, 1, 0, 1, 0],
      [0, 0, 1, 0, 0],
    ];
    expect(obtainGroupOfOnes(matrix)).toBe(4);
  });

  it("should find five groups of ones", () => {
    let matrix = [
      [1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 1],
      [0, 0, 0, 1, 0],
    ];
    expect(obtainGroupOfOnes(matrix)).toBe(5);
  });

  it("should find two groups of ones", () => {
    let matrix = [
      [1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
    ];
    expect(obtainGroupOfOnes(matrix)).toBe(2);
  });

  it("should find five groups of ones", () => {
    let matrix = [
      [0, 0],
      [0, 0],
      [1, 0],
      [0, 0],
    ];
    expect(obtainGroupOfOnes(matrix)).toBe(1);
  });
});
