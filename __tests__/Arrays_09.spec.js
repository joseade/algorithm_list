const { arrangeArray } = require("../Arrays_09");

describe("Given an array with values ranging from 0 to n-1, swap each array location with the value on the nth position with a[a[n]]", () => {
  it("Array with n=4", () => {
    let arr = [3, 1, 0, 2];
    const n = 4;
    arrangeArray(arr, n);
    expect(arr).toStrictEqual([2, 1, 3, 0]);
  });
  it("Array with n=5", () => {
    let arr = [0, 1, 2, 4, 3];
    const n = 5;
    arrangeArray(arr, n);
    expect(arr).toStrictEqual([0, 1, 2, 3, 4]);
  });
  it("Array with n=6", () => {
    let arr = [5, 4, 3, 1, 2, 0];
    const n = 6;
    arrangeArray(arr, n);
    console.log(arr);
    expect(arr).toStrictEqual([0, 2, 1, 4, 3, 5]);
  });
});
