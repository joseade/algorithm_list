const { mergeArrays } = require("../Arrays_06");

describe("Merge two sorted arrays where one has enough space at the end for the other", () => {
  it("should merge two arrays of equal size", () => {
    const largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
    const smallArray = [0, 2, 4, 6, 8];
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("should merge a bigger array into an smaller one", () => {
    const largeArray = [1].concat(new Array(5));
    const smallArray = [0, 2, 4, 6, 8];
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toStrictEqual([0, 1, 2, 4, 6, 8]);
  });

  it("should merge an smaller array into a bigger one", () => {
    const largeArray = [1, 20, 50].concat(new Array(2));
    const smallArray = [-1, 30];
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toStrictEqual([-1, 1, 20, 30, 50]);
  });
});
