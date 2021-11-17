const { findAnagrams } = require("../Strings_03");

describe("Finding anagrams", () => {
  it("Should find the anagrams of eat", () => {
    let str = "eat";
    expect(findAnagrams(str)).toStrictEqual(["ate", "eta", "tae", "tea"]);
  });
  it("Should find the anagrams of has", () => {
    let str = "has";
    expect(findAnagrams(str)).toStrictEqual(["ahs", "ash", "sha"]);
  });
  it("Should find the anagrams of elbow", () => {
    let str = "elbow";
    expect(findAnagrams(str)).toStrictEqual(["below", "bowel"]);
  });
  it("Should find the anagrams of spread", () => {
    let str = "spread";
    expect(findAnagrams(str)).toStrictEqual([
      "drapes",
      "padres",
      "parsed",
      "rasped",
      "spader",
      "spared",
    ]);
  });
});
