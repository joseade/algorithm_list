const { findConsecutive } = require("../Search_08");

describe("Find the consecutive sequence of numbers that sums up to a target number", () => {
  it("Should find sequences when n=2", () => {
    let n = 2;
    expect(findConsecutive(n)).toBeFalsy();
  });
  it("Should find sequences when n=3", () => {
    let n = 3;
    expect(findConsecutive(n)).toStrictEqual([[1, 2]]);
  });
  it("Should find sequences when n=9", () => {
    let n = 9;
    expect(findConsecutive(n)).toStrictEqual([
      [2, 4],
      [4, 5],
    ]);
  });
  it("Should find sequences when n=15", () => {
    let n = 15;
    expect(findConsecutive(n)).toStrictEqual([
      [1, 5],
      [4, 6],
      [7, 8],
    ]);
  });
  it("Should find sequences when n=25", () => {
    let n = 25;
    expect(findConsecutive(n)).toStrictEqual([
      [3, 7],
      [12, 13],
    ]);
  });
  it("Should find sequences when n=30", () => {
    let n = 30;
    expect(findConsecutive(n)).toStrictEqual([
      [4, 8],
      [6, 9],
      [9, 11],
    ]);
  });
  it("Should find sequences when n=32", () => {
    let n = 32;
    expect(findConsecutive(n)).toBeFalsy();
  });
  it("Should find sequences when n=100", () => {
    let n = 100;
    expect(findConsecutive(n)).toStrictEqual([
      [9, 16],
      [18, 22],
    ]);
  });
  it("Should find sequences when n=125", () => {
    let n = 125;
    expect(findConsecutive(n)).toStrictEqual([
      [8, 17],
      [23, 27],
      [62, 63],
    ]);
  });
  it("Should find sequences when n=200", () => {
    let n = 200;
    expect(findConsecutive(n)).toStrictEqual([
      [5, 20],
      [38, 42],
    ]);
  });
});
