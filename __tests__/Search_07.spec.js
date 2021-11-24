const { smallestSubstring } = require("../Search_07");

describe("Given a string of lowercase letters, find a string that contains all unique characters and has the lowest lexicographic value possible", () => {
  it("Should find the smallest substring in bcabc", () => {
    let str = "bcabc";
    expect(smallestSubstring(str)).toBe("abc");
  });
  it("Should find the smallest substring in cbacdcbc", () => {
    let str = "cbacdcbc";
    expect(smallestSubstring(str)).toBe("acdb");
  });

  it("Should find the smallest substring in wxyz", () => {
    let str = "wxyz";
    expect(smallestSubstring(str)).toBe("wxyz");
  });

  it("Should find the smallest substring in jaaa", () => {
    let str = "jaaa";
    expect(smallestSubstring(str)).toBe("ja");
  });
});
