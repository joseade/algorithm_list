const { isCombination } = require("../Search_13");

describe("Given A, B, and C as inputs, determine if C can be formed by an interleaved combination of the characters of A and B", () => {
  it("Should analize some examples with two strings of length four", () => {
    let str1 = "abcd";
    let str2 = "abcd";

    let goal = "aabcbcdd";
    expect(isCombination(str1, str2, goal)).toBeTruthy();

    goal = "aabbccdd";
    expect(isCombination(str1, str2, goal)).toBeTruthy();

    goal = "abcddcba";
    expect(isCombination(str1, str2, goal)).toBeTruthy();

    goal = "aabcbcdda";
    expect(isCombination(str1, str2, goal)).toBeFalsy();

    goal = "aabcfbcdd";
    expect(isCombination(str1, str2, goal)).toBeFalsy();

    goal = "r";
    expect(isCombination(str1, str2, goal)).toBeFalsy();
  });

  it("Should analize some examples with one string of length one and another of length six", () => {
    let str1 = "ma";
    let str2 = "aeiouz";

    let goal = "aeiomuza";
    expect(isCombination(str1, str2, goal)).toBeTruthy();

    goal = "maaeiouz";
    expect(isCombination(str1, str2, goal)).toBeTruthy();

    goal = "aameiouz";
    expect(isCombination(str1, str2, goal)).toBeTruthy();

    goal = "aeiomuzam";
    expect(isCombination(str1, str2, goal)).toBeFalsy();

    goal = "aeiotmuza";
    expect(isCombination(str1, str2, goal)).toBeFalsy();

    goal = "pq";
    expect(isCombination(str1, str2, goal)).toBeFalsy();
  });
});
