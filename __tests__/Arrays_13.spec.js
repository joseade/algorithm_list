const { flattenIteratively, flattenRecursively } = require("../Arrays_13");

describe("Recursive and iterative implementation for flattening an array", () => {
  it("Should flat and array containing ten elements", () => {
    const arr = [1, 2, 3, [4, 5, [6, [[7]], 8]], [9, 10]];
    expect(flattenIteratively(arr)).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    expect(flattenRecursively(arr)).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });
  it("Should flat and array containing three elements", () => {
    const arr = [[1, [2, [3]]], []];
    expect(flattenIteratively(arr)).toStrictEqual([1, 2, 3]);
    expect(flattenRecursively(arr)).toStrictEqual([1, 2, 3]);
  });
});
