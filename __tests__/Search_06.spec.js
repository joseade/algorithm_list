const { longestCommonSubsequence } = require("../Search_06");

describe("Find the size of the Longest Common Subsequence (LCS)", () => {
  it("Should find the LCS", () => {
    let str1 = "abcde";
    let str2 = "ace";
    expect(longestCommonSubsequence(str1, str2)).toBe(3);

    str1 = "gac";
    str2 = "agcat";
    expect(longestCommonSubsequence(str1, str2)).toBe(2);

    str1 = "xmjyauz";
    str2 = "mzjawxu";
    expect(longestCommonSubsequence(str1, str2)).toBe(4);

    str1 = "abcbdab";
    str2 = "bdcaba";
    expect(longestCommonSubsequence(str1, str2)).toBe(4);
  });
});
