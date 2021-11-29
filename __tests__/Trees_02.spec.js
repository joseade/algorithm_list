const { Node, BinaryTree, printNodes } = require("../Trees_02");

global.console.log = jest.fn();
afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a binary tree, print out the nodes in order of top-to-bottm, and left-to-right", () => {
  it("Should traverse a binary tree with seven nodes", () => {
    const bt = new BinaryTree();
    const node500 = new Node(500);
    bt.root = node500;
    const node150 = new Node(150);
    const node3 = new Node(3);
    const node9 = new Node(9);
    const node25 = new Node(25);
    const node46 = new Node(46);
    const node97 = new Node(97);

    node500.left = node150;
    node500.right = node3;
    node150.left = node9;
    node150.right = node25;
    node3.left = node46;
    node3.right = node97;

    printNodes(bt, console.log);
    expect(console.log).toHaveBeenNthCalledWith(1, 500);
    expect(console.log).toHaveBeenNthCalledWith(2, 150);
    expect(console.log).toHaveBeenNthCalledWith(3, 3);
    expect(console.log).toHaveBeenNthCalledWith(4, 9);
    expect(console.log).toHaveBeenNthCalledWith(5, 25);
    expect(console.log).toHaveBeenNthCalledWith(6, 46);
    expect(console.log).toHaveBeenNthCalledWith(7, 97);
    expect(console.log).toHaveBeenCalledTimes(7);
  });

  it("Should traverse a binary tree with fifteen nodes", () => {
    const bt = new BinaryTree();
    const node1 = new Node(1);
    bt.root = node1;
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node6 = new Node(6);
    const node7 = new Node(7);
    const node8 = new Node(8);
    const node9 = new Node(9);
    const node10 = new Node(10);
    const node11 = new Node(11);
    const node12 = new Node(12);
    const node13 = new Node(13);
    const node14 = new Node(14);
    const node15 = new Node(15);

    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;
    node3.left = node6;
    node3.right = node7;
    node4.left = node8;
    node4.right = node9;
    node5.left = node10;
    node5.right = node11;
    node6.left = node12;
    node6.right = node13;
    node7.left = node14;
    node7.right = node15;

    printNodes(bt, console.log);
    expect(console.log).toHaveBeenNthCalledWith(1, 1);
    expect(console.log).toHaveBeenNthCalledWith(2, 2);
    expect(console.log).toHaveBeenNthCalledWith(3, 3);
    expect(console.log).toHaveBeenNthCalledWith(4, 4);
    expect(console.log).toHaveBeenNthCalledWith(5, 5);
    expect(console.log).toHaveBeenNthCalledWith(6, 6);
    expect(console.log).toHaveBeenNthCalledWith(7, 7);
    expect(console.log).toHaveBeenNthCalledWith(8, 8);
    expect(console.log).toHaveBeenNthCalledWith(9, 9);
    expect(console.log).toHaveBeenNthCalledWith(10, 10);
    expect(console.log).toHaveBeenNthCalledWith(11, 11);
    expect(console.log).toHaveBeenNthCalledWith(12, 12);
    expect(console.log).toHaveBeenNthCalledWith(13, 13);
    expect(console.log).toHaveBeenNthCalledWith(14, 14);
    expect(console.log).toHaveBeenNthCalledWith(15, 15);
    expect(console.log).toHaveBeenCalledTimes(15);
  });
});
