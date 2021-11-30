const { Node, Tree } = require("../Trees_03");
const { isMirrored } = require("../Trees_05");

describe("Determine if a tree is mirrored ", () => {
  it("Should return that the following tree is mirrored", () => {
    const tree = new Tree();
    const node0 = new Node(0);
    tree.root = node0;
    expect(isMirrored(tree)).toBeTruthy();
  });

  it("Should return that the following tree is mirrored", () => {
    const tree = new Tree();
    const node0 = new Node(0);
    node0.insertChild(35);
    node0.insertChild(35);
    tree.root = node0;
    expect(isMirrored(tree)).toBeTruthy();
  });
  it("Should return that the following tree is not mirrored", () => {
    const tree = new Tree();
    const node0 = new Node(1);
    node0.insertChild(4);
    node0.insertChild(2);
    tree.root = node0;
    expect(isMirrored(tree)).toBeFalsy();
  });
  it("Should return that the following tree is mirrored", () => {
    const tree = new Tree();
    const node0 = new Node(1);
    node0.insertChild(1);
    node0.insertChild(2);
    node0.insertChild(3);
    node0.insertChild(2);
    node0.insertChild(1);
    tree.root = node0;
    expect(isMirrored(tree)).toBeTruthy();
  });
  it("Should return that the following tree is mirrored", () => {
    const tree = new Tree();
    const node1 = new Node(1);
    const node211 = node1.insertChild(1);
    node1.insertChild(2);
    node1.insertChild(3);
    node1.insertChild(2);
    const node215 = node1.insertChild(1);

    node211.insertChild(4);
    node211.insertChild(5);
    node215.insertChild(5);
    node215.insertChild(4);

    tree.root = node1;
    expect(isMirrored(tree)).toBeTruthy();
  });
  it("Should return that the following tree is mirrored", () => {
    const tree = new Tree();
    const node1 = new Node(10);
    node1.insertChild(5);
    node1.insertChild(2);
    const node233 = node1.insertChild(3);
    node1.insertChild(2);
    node1.insertChild(5);

    node233.insertChild(10);

    tree.root = node1;
    expect(isMirrored(tree)).toBeTruthy();
  });

  it("Should return that the following tree is not mirrored", () => {
    const tree = new Tree();
    const node1 = new Node(10);
    node1.insertChild(5);
    node1.insertChild(2);
    const node233 = node1.insertChild(3);
    node1.insertChild(2);
    node1.insertChild(5);

    node233.insertChild(10);
    node233.insertChild(1);

    tree.root = node1;
    expect(isMirrored(tree)).toBeFalsy();
  });

  it("Should return that the following tree is mirrored", () => {
    const tree = new Tree();
    const node1 = new Node(10);
    node1.insertChild(5);
    node1.insertChild(2);
    const node233 = node1.insertChild(3);
    node1.insertChild(2);
    node1.insertChild(5);

    node233.insertChild(10);
    node233.insertChild(1);
    node233.insertChild(1);
    node233.insertChild(10);

    tree.root = node1;
    expect(isMirrored(tree)).toBeTruthy();
  });

  it("Should return that the following tree is mirrored", () => {
    const tree = new Tree();
    const node1 = new Node(10);
    const node215 = node1.insertChild(5);
    node1.insertChild(2);
    const node233 = node1.insertChild(3);
    node1.insertChild(2);
    const node255 = node1.insertChild(5);

    node233.insertChild(10);
    node233.insertChild(1);
    node233.insertChild(1);
    node233.insertChild(10);

    node215.insertChild(90);
    node215.insertChild(9);
    node215.insertChild(5);
    node255.insertChild(5);
    node255.insertChild(9);
    node255.insertChild(90);
    tree.root = node1;
    expect(isMirrored(tree)).toBeTruthy();
  });

  it("Should return that the following tree is mirrored", () => {
    const tree = new Tree();
    const node1 = new Node(10);
    const node215 = node1.insertChild(5);
    node1.insertChild(2);
    node1.insertChild(3);
    node1.insertChild(2);
    const node255 = node1.insertChild(5);

    node215.insertChild(90);
    node215.insertChild(9);
    node255.insertChild(9);
    node255.insertChild(90);
    tree.root = node1;
    expect(isMirrored(tree)).toBeTruthy();
  });

  it("Should return that the following tree is not mirrored", () => {
    const tree = new Tree();
    const node1 = new Node(10);
    const node215 = node1.insertChild(5);
    node1.insertChild(2);
    node1.insertChild(3);
    node1.insertChild(2);
    node1.insertChild(5);

    node215.insertChild(90);
    tree.root = node1;
    expect(isMirrored(tree)).toBeFalsy();
  });
});
