const { levenshteinMetric } = require("../Strings_02");

describe("Find the distance between two strings (Levenshtein)", () => {
  it("Should find the distance between saturday and sunday", () => {
    let str1 = "saturday";
    let str2 = "sunday";
    expect(levenshteinMetric(str1, str2)).toBe(3);
  });
  it("Should find the distance between sitting and kitten", () => {
    let str1 = "sitting";
    let str2 = "kitten";
    expect(levenshteinMetric(str1, str2)).toBe(3);
  });
  it("Should find the distance between eat and ate", () => {
    let str1 = "eat";
    let str2 = "ate";
    expect(levenshteinMetric(str1, str2)).toBe(2);
  });
});
