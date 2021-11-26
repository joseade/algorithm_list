const { findSmallestSubstring } = require("../Search_11");

describe("Find the smallest substring in S that contains all the characters in the string T", () => {
  it("Should find the smallest substring in ABAACBAB that contains ABC", () => {
    let s = "ABAACBAB";
    let t = "ABC";
    expect(findSmallestSubstring(s, t)).toBe("ACB");
  });

  it("Should find the smallest substring in ADOBECODEBANC that contains ABC", () => {
    let s = "ADOBECODEBANC";
    let t = "ABC";
    expect(findSmallestSubstring(s, t)).toBe("BANC");
  });

  it("Should find the smallest substring in A that contains A", () => {
    let s = "A";
    let t = "A";
    expect(findSmallestSubstring(s, t)).toBe("A");
  });

  it("Should find the smallest substring in ABCDDDDDDEEAFFBC that contains ABC", () => {
    let s = "AABCDDDDDDEEAFFBC";
    let t = "ABC";
    expect(findSmallestSubstring(s, t)).toBe("ABC");
  });

  it("Should find the smallest substring in ZZZZZZZABC that contains ABC", () => {
    let s = "ZZZZZZZABC";
    let t = "ABC";
    expect(findSmallestSubstring(s, t)).toBe("ABC");
  });

  it("Should find the smallest substring in DFGHHIJKL that contains HI", () => {
    let s = "DFGHHIJKL";
    let t = "HI";
    expect(findSmallestSubstring(s, t)).toBe("HI");
  });
});
