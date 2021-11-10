const { findBalancingIndex } = require("../Arrays_16");

describe("Find the index of that array that balances the left and right sum", () => {
  it("Balancing array at index 6", () => {
    const matrix = [1, 2, 3, 4, 9, 9, 2, 7, 10, 13];
    expect(findBalancingIndex(matrix)).toBe(6);
  });

  it("Balancing array at index 8", () => {
    const matrix = [0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 0, 0, 0];
    expect(findBalancingIndex(matrix)).toBe(8);
  });

  it("Not a balancing array", () => {
    const matrix = [1, 2, 3, 4];
    expect(findBalancingIndex(matrix)).toBe(-1);
  });
});
