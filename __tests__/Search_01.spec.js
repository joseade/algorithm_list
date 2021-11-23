const { findLongestWord } = require("../Search_01");

describe("Given a random set of letters, find the longest word that can be formed", () => {
  it("Should find the longest word that can be formed with abc", () => {
    expect(findLongestWord("abc")).toHaveProperty("bacca");
  });
  it("Should find the longest word that can be formed with ale", () => {
    expect(findLongestWord("ale")).toHaveProperty("allele");
  });
  it("Should find the longest word that can be formed with fune", () => {
    expect(findLongestWord("fuge")).toHaveProperty("fugue");
  });
  it("Should find the longest word that can be formed with aeiouhts", () => {
    expect(findLongestWord("aeiouhts")).toHaveProperty("statehouses");
  });
  it("Should find the longest word that can be formed with abcdefghij", () => {
    expect(findLongestWord("abcdefghij")).toHaveProperty("deacidified");
  });
});
