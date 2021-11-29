const { Trie } = require("../Trees_04");

describe("Given a dictionary input, output a trie structure representing the dictionary", () => {
  const trie = new Trie();
  trie.insert("cat", "A carnivorous mammal");
  trie.insert("can", "To be able to do, make, or accomplish");
  trie.insert("game", "An activity providing entertainment or amusement");
  trie.insert("middle", "Something intermediate between extremes");
  trie.insert("c", "A widely used programming language");

  it("Should find the meaning of cat", () => {
    expect(trie.contains("cat")).toBe("A carnivorous mammal");
  });
  it("Should find the meaning of can", () => {
    expect(trie.contains("can")).toBe("To be able to do, make, or accomplish");
  });
  it("Should find the meaning of game", () => {
    expect(trie.contains("game")).toBe(
      "An activity providing entertainment or amusement"
    );
  });
  it("Should find the meaning of middle", () => {
    expect(trie.contains("middle")).toBe(
      "Something intermediate between extremes"
    );
  });
  it("Should find the meaning of c", () => {
    expect(trie.contains("c")).toBe("A widely used programming language");
  });
  it("Should not find the meaning of house", () => {
    expect(trie.contains("house")).toBeFalsy();
  });
  it("Should not find the meaning of car", () => {
    expect(trie.contains("car")).toBeFalsy();
  });
  it("Should not find the meaning of model", () => {
    expect(trie.contains("model")).toBeFalsy();
  });
  it("Should not find the meaning of w", () => {
    expect(trie.contains("w")).toBeFalsy();
  });
});
