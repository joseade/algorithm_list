const { findKthLargest } = require("../Search_04");

describe("Find the Kth largest numbers in an unsorted list.", () => {
  it("Should find the first largest number in an array of length three", () => {
    const arr = [-30, 50, 6];
    expect(findKthLargest(arr, 1)).toBe(50);
  });
  it("Should find the second largest number in an array of length three", () => {
    const arr = [6, -30, 50];
    expect(findKthLargest(arr, 2)).toBe(6);
  });
  it("Should find the third largest number in an array of length nine", () => {
    const arr = [1, 50, -4, 80, 104, 2, 9, -2, 25];
    expect(findKthLargest(arr, 3)).toBe(50);
  });
  it("Should find the sixth largest number in an array of length nine", () => {
    const arr = [1, 50, -4, 80, 104, 2, 9, -2, 25];
    expect(findKthLargest(arr, 6)).toBe(2);
  });
  it("Should find the eighth largest number in an array of length nine", () => {
    const arr = [1, 50, -4, 80, 104, 2, 9, -2, 25];
    expect(findKthLargest(arr, 8)).toBe(-2);
  });
});
