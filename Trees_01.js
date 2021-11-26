class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    this.children.push(new Node(data));
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

const traverseDF = (tree) => {
  tree.root.parent = null;
  tree.root.depth = 0;
  const arr = [tree.root];
  let depth = 0;
  let df = [];
  while (arr.length > 0) {
    const node = arr.shift();
    depth++;
    for (let child of node.children) {
      child.parent = node;
      child.depth = depth;
    }
    arr.unshift(...node.children);
    df.push(node);
  }
  return df;
};

const findNode = (arr, node) => {
  const res = arr.filter(({ data }) => data === node);
  return res.length > 0 ? res[0] : null;
};

const lowestCommonAncestor = (tree, p, q) => {
  let arr = traverseDF(tree);
  let nodeP = findNode(arr, p);
  let nodeQ = findNode(arr, q);

  if (nodeP === nodeQ) return nodeP.data;
  while (nodeP.depth !== nodeQ.depth) {
    if (nodeP.depth > nodeQ.depth) {
      nodeP = nodeP.parent;
    } else {
      nodeQ = nodeQ.parent;
    }
  }

  if (nodeP === nodeQ) return nodeP.data;

  while (nodeP !== nodeQ) {
    nodeP = nodeP.parent;
    nodeQ = nodeQ.parent;
  }
  return nodeP.data;
};

module.exports = {
  Node,
  Tree,
  lowestCommonAncestor,
};
