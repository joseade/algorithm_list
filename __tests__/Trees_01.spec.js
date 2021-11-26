const { Node, Tree, lowestCommonAncestor } = require("../Trees_01");

describe("Find Lowest Common Ancestor (LCA)", () => {
  it("Should find the LCA for a binary tree", () => {
    const tree = new Tree();
    const node1 = new Node(1);
    tree.root = node1;
    node1.add(2);
    node1.add(3);
    node1.children[0].add(4);
    node1.children[0].add(5);
    node1.children[0].children[0].add(8);
    node1.children[0].children[0].add(9);
    node1.children[0].children[1].add(10);
    node1.children[0].children[1].add(11);
    node1.children[1].add(6);
    node1.children[1].add(7);
    node1.children[1].children[0].add(12);
    node1.children[1].children[0].add(13);
    node1.children[1].children[1].add(14);
    node1.children[1].children[1].add(15);

    expect(lowestCommonAncestor(tree, 1, 2)).toBe(1);
    expect(lowestCommonAncestor(tree, 1, 8)).toBe(1);
    expect(lowestCommonAncestor(tree, 2, 3)).toBe(1);
    expect(lowestCommonAncestor(tree, 4, 5)).toBe(2);
    expect(lowestCommonAncestor(tree, 6, 7)).toBe(3);
    expect(lowestCommonAncestor(tree, 8, 9)).toBe(4);
    expect(lowestCommonAncestor(tree, 10, 11)).toBe(5);
    expect(lowestCommonAncestor(tree, 12, 13)).toBe(6);
    expect(lowestCommonAncestor(tree, 14, 15)).toBe(7);
    expect(lowestCommonAncestor(tree, 9, 11)).toBe(2);
    expect(lowestCommonAncestor(tree, 8, 5)).toBe(2);
    expect(lowestCommonAncestor(tree, 2, 15)).toBe(1);
    expect(lowestCommonAncestor(tree, 2, 8)).toBe(2);
    expect(lowestCommonAncestor(tree, 1, 15)).toBe(1);
    expect(lowestCommonAncestor(tree, 13, 3)).toBe(3);
  });
  it("Should find the LCA for a n-ary tree", () => {
    const tree = new Tree();
    const node1 = new Node(1);
    tree.root = node1;
    node1.add(2);
    node1.add(3);
    node1.add(4);
    node1.add(5);

    node1.children[1].add(6);
    node1.children[1].add(7);
    node1.children[2].add(8);
    node1.children[2].add(9);
    node1.children[2].add(10);
    node1.children[3].add(11);
    node1.children[2].children[0].add(13);
    node1.children[2].children[0].add(14);
    node1.children[2].children[2].add(15);

    expect(lowestCommonAncestor(tree, 1, 2)).toBe(1);
    expect(lowestCommonAncestor(tree, 2, 3)).toBe(1);
    expect(lowestCommonAncestor(tree, 3, 4)).toBe(1);
    expect(lowestCommonAncestor(tree, 4, 5)).toBe(1);
    expect(lowestCommonAncestor(tree, 2, 5)).toBe(1);
    expect(lowestCommonAncestor(tree, 6, 7)).toBe(3);
    expect(lowestCommonAncestor(tree, 8, 9)).toBe(4);
    expect(lowestCommonAncestor(tree, 9, 10)).toBe(4);
    expect(lowestCommonAncestor(tree, 13, 14)).toBe(8);
    expect(lowestCommonAncestor(tree, 14, 15)).toBe(4);
    expect(lowestCommonAncestor(tree, 13, 11)).toBe(1);
    expect(lowestCommonAncestor(tree, 6, 15)).toBe(1);
    expect(lowestCommonAncestor(tree, 7, 9)).toBe(1);
    expect(lowestCommonAncestor(tree, 2, 15)).toBe(1);
    expect(lowestCommonAncestor(tree, 2, 11)).toBe(1);
  });
});
