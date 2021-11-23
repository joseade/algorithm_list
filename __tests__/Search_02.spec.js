const { findSecondLargest } = require("../Search_02");

describe("Find the 2nd largest number", () => {
  it("Should find the 2nd largest number in an array of length two", () => {
    const arr = [-3, -20];
    expect(findSecondLargest(arr)).toBe(-20);
  });
  it("Should find the 2nd largest number in an array of length three", () => {
    const arr = [90, 4, 10];
    expect(findSecondLargest(arr)).toBe(10);
  });
  it("Should find the 2nd largest number in an array of length four", () => {
    const arr = [-11, -3, 0, -5];
    expect(findSecondLargest(arr)).toBe(-3);
  });
  it("Should find the 2nd largest number in an array of length nine", () => {
    const arr = [-11, 90, 4, 15, -3, 0, 8, 9 - 5];
    expect(findSecondLargest(arr)).toBe(15);
  });
});
