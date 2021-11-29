const { Node, Tree, isSameLevel } = require("../Trees_03");

describe("Given the root of a tree, write a function that takes two numbers (n1 and n2). Search for these two numbers within the tree and indicate if they are found at the same depth", () => {
  const tree = new Tree();
  const node00 = new Node(0);

  node00.insertChild(1);
  const node12 = node00.insertChild(2);
  const node13 = node00.insertChild(3);
  node00.insertChild(5);
  const node17 = node00.insertChild(7);

  node12.insertChild(1);
  const node25 = node12.insertChild(5);
  node13.insertChild(0);
  const node23 = node17.insertChild(3);

  node25.insertChild(3);
  const node35 = node25.insertChild(5);
  node25.insertChild(9);
  node23.insertChild(3);
  const node30 = node23.insertChild(0);

  node35.insertChild(6);
  node30.insertChild(9);
  node30.insertChild(4);

  tree.root = node00;
  it("Should return that nodes 1 and 3 are at the same depth", () => {
    expect(isSameLevel(tree, 1, 3)).toBeTruthy();
  });
  it("Should return that nodes 2 and 5 are at the same depth", () => {
    expect(isSameLevel(tree, 2, 5)).toBeTruthy();
  });
  it("Should return that nodes 3 and 7 are at the same depth", () => {
    expect(isSameLevel(tree, 3, 7)).toBeTruthy();
  });
  it("Should return that nodes 1 and 7 are at the same depth", () => {
    expect(isSameLevel(tree, 1, 7)).toBeTruthy();
  });
  it("Should return that nodes 1 and 0 are at the same depth", () => {
    expect(isSameLevel(tree, 1, 0)).toBeTruthy();
  });
  it("Should return that nodes 5 and 0 are at the same depth", () => {
    expect(isSameLevel(tree, 5, 0)).toBeTruthy();
  });
  it("Should return that nodes 3 and 0 are at the same depth", () => {
    expect(isSameLevel(tree, 3, 0)).toBeTruthy();
  });
  it("Should return that nodes 9 and 0 are at the same depth", () => {
    expect(isSameLevel(tree, 9, 0)).toBeTruthy();
  });
  it("Should return that nodes 3 and 3 are at the same depth", () => {
    expect(isSameLevel(tree, 3, 3)).toBeTruthy();
  });
  it("Should return that nodes 3 and 9 are at the same depth", () => {
    expect(isSameLevel(tree, 3, 9)).toBeTruthy();
  });
  it("Should return that nodes 5 and 9 are at the same depth", () => {
    expect(isSameLevel(tree, 5, 9)).toBeTruthy();
  });
  it("Should return that nodes 4 and 9 are at the same depth", () => {
    expect(isSameLevel(tree, 4, 9)).toBeTruthy();
  });
  it("Should return that nodes 5 and 9 are at the same depth", () => {
    expect(isSameLevel(tree, 6, 4)).toBeTruthy();
  });
  it("Should return that nodes 1 and 9 are not at the same depth", () => {
    expect(isSameLevel(tree, 1, 9)).toBeFalsy();
  });
  it("Should return that nodes 7 and 9 are not at the same depth", () => {
    expect(isSameLevel(tree, 7, 9)).toBeFalsy();
  });
  it("Should return that nodes 2 and 9 are not at the same depth", () => {
    expect(isSameLevel(tree, 2, 9)).toBeFalsy();
  });
  it("Should return that nodes 0 and 4 are not at the same depth", () => {
    expect(isSameLevel(tree, 0, 4)).toBeFalsy();
  });
});
