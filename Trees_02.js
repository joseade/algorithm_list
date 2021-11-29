class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

const printNodes = (tree, fn) => {
  const arr = [tree.root];
  while (arr.length > 0) {
    const node = arr.shift();
    fn(node.value);
    if (node.left) arr.push(node.left);
    if (node.right) arr.push(node.right);
  }
};

module.exports = {
  Node,
  BinaryTree,
  printNodes,
};
