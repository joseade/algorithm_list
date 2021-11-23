const { findMissingNumber } = require("../Search_05");

describe("Given a set of numbers of size N-1 whose values range from 1 to N, finding the missing number", () => {
  it("Should find the missing number in an array of length three", () => {
    let arr = [1, 2, 3];
    expect(findMissingNumber(arr)).toBe(4);
    arr = [4, 2, 3];
    expect(findMissingNumber(arr)).toBe(1);
    arr = [4, 3, 1];
    expect(findMissingNumber(arr)).toBe(2);
    arr = [2, 4, 1];
    expect(findMissingNumber(arr)).toBe(3);
  });
  it("Should find the missing number in an array of length ten", () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(findMissingNumber(arr)).toBe(11);
    arr = [1, 2, 11, 4, 5, 6, 7, 8, 9, 3];
    expect(findMissingNumber(arr)).toBe(10);
    arr = [1, 2, 11, 4, 5, 6, 7, 8, 10, 3];
    expect(findMissingNumber(arr)).toBe(9);
    arr = [1, 2, 11, 4, 5, 6, 7, 9, 10, 3];
    expect(findMissingNumber(arr)).toBe(8);
    arr = [1, 2, 11, 4, 8, 6, 5, 9, 10, 3];
    expect(findMissingNumber(arr)).toBe(7);
    arr = [1, 2, 11, 4, 8, 7, 5, 9, 10, 3];
    expect(findMissingNumber(arr)).toBe(6);
    arr = [2, 1, 11, 4, 8, 7, 6, 9, 10, 3];
    expect(findMissingNumber(arr)).toBe(5);
    arr = [2, 1, 11, 5, 8, 7, 6, 9, 10, 3];
    expect(findMissingNumber(arr)).toBe(4);
    arr = [2, 1, 11, 5, 8, 7, 6, 9, 10, 4];
    expect(findMissingNumber(arr)).toBe(3);
    arr = [4, 1, 11, 5, 8, 7, 6, 9, 10, 3];
    expect(findMissingNumber(arr)).toBe(2);
    arr = [2, 4, 11, 5, 8, 7, 6, 9, 10, 3];
    expect(findMissingNumber(arr)).toBe(1);
  });
});
