const { maxValue } = require("../Arrays_01");

describe("Maximum value of an array withouth using loops", () => {
  it("should return the unique element of an array containing one element", () => {
    let arr = [4];
    expect(maxValue(arr)).toBe(arr[0]);

    arr = [-4];
    expect(maxValue(arr)).toBe(arr[0]);
  });

  it("should return the max element of an array containing two elements", () => {
    let arr = [4, 5];
    expect(maxValue(arr)).toBe(arr[1]);

    arr = [-4, -30];
    expect(maxValue(arr)).toBe(arr[0]);
  });

  it("should return the max element of an array containing more than two elements", () => {
    let arr = [4, 5, 50];
    expect(maxValue(arr)).toBe(arr[2]);

    arr = [-4, -30, 0];
    expect(maxValue(arr)).toBe(arr[2]);

    arr = [100, -30, 0, 8, 30, -300, -4];
    expect(maxValue(arr)).toBe(arr[0]);
  });
});
