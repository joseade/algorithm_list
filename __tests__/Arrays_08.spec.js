const { addArrays } = require("../Arrays_08");

describe("Add two arrays containing single-digit numbers", () => {
  it("arr1 length greater than arr2 length ", () => {
    const arr1 = [1, 3, 5, 7, 9];
    const arr2 = [2, 4, 6, 8];
    expect(addArrays(arr1, arr2)).toStrictEqual([1, 6, 0, 4, 7]);
  });
  it("arr1 length less than arr2 length", () => {
    const arr1 = [8];
    const arr2 = [5, 2, 1, 9];
    expect(addArrays(arr1, arr2)).toStrictEqual([5, 2, 2, 7]);
  });
  it("arr1 length equals arr2 length with carrier", () => {
    const arr1 = [9, 3, 4, 0];
    const arr2 = [1, 1, 1, 9];
    expect(addArrays(arr1, arr2)).toStrictEqual([1, 0, 4, 5, 9]);
  });
  it("arr1 length equals arr2 length withouth carrier", () => {
    const arr1 = [3, 4, 0];
    const arr2 = [6, 0, 1];
    expect(addArrays(arr1, arr2)).toStrictEqual([9, 4, 1]);
  });
});
