const { reverseBlocks } = require("../Arrays_11");

describe("Reverse N sized blocks of an array.", () => {
  it("Should reverse an array of size 10 with N=3", () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const n = 3;
    reverseBlocks(arr, n);
    expect(arr).toStrictEqual([2, 1, 0, 5, 4, 3, 8, 7, 6, 9]);
  });

  it("Should reverse an array of size 10 with N=6", () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const n = 6;
    reverseBlocks(arr, n);
    expect(arr).toStrictEqual([5, 4, 3, 2, 1, 0, 9, 8, 7, 6]);
  });

  it("Should reverse an array of size 10 with N=10", () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const n = 10;
    reverseBlocks(arr, n);
    expect(arr).toStrictEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });
});
