const { findMajority } = require("../Search_10");

describe("Find the majority number in an array", () => {
  it("Should find the majority number in arrays of lenght two", () => {
    let arr = [1, 1];
    expect(findMajority(arr)).toBe(1);
    arr = [-43, -43];
    expect(findMajority(arr)).toBe(-43);
    arr = [0, 0];
    expect(findMajority(arr)).toBe(0);
  });
  it("Should find the majority number in arrays of lenght three", () => {
    let arr = [11, 8, 11];
    expect(findMajority(arr)).toBe(11);
    arr = [0, -5, -5];
    expect(findMajority(arr)).toBe(-5);
    arr = [0, 0, 0];
    expect(findMajority(arr)).toBe(0);
  });
  it("Should find the majority number in arrays of lenght eight", () => {
    let arr = [2, 3, 2, 5, 2, 2, 9, 2];
    expect(findMajority(arr)).toBe(2);
    arr = [100, 100, 100, 100, 4, 5, 6, 100];
    expect(findMajority(arr)).toBe(100);
    arr = [1, 1, 11, , 6, 7, 1, 1, 1];
    expect(findMajority(arr)).toBe(1);
  });
});
