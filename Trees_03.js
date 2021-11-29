class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  insertChild(value) {
    const node = new Node(value);
    this.children.push(node);
    return node;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

const isSameLevel = (tree, n1, n2) => {
  const hasNodes = (children, n1, n2) => {
    const res = children.filter(
      (child) => child.value === n1 || child.value === n2
    );
    return res.length >= 2 ? true : false;
  };
  if (!tree.root) return false;
  let q = [...tree.root.children];
  let i = 0;
  let n = q.length;
  if (hasNodes(q, n1, n2)) return true;
  while (q.length > 0) {
    const node = q.shift();
    q.push(...node.children);
    i++;
    if (i === n && q.length > 0) {
      i = 0;
      n = q.length;
      if (hasNodes(q, n1, n2)) return true;
    }
  }
  return false;
};

module.exports = {
  Node,
  Tree,
  isSameLevel,
};
