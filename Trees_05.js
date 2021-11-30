const isArraySymmetric = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start++].value !== arr[end--].value) return false;
  }
  return true;
};

const isSymmetric = (parents) => {
  let start = 0;
  let end = parents.length - 1;
  while (start < end) {
    if (parents[start].children.length !== parents[end].children.length) {
      return false;
    } else if (
      !isArraySymmetric([...parents[start].children, ...parents[end].children])
    ) {
      return false;
    }
    start++;
    end--;
  }
  if (start === end && !isArraySymmetric(parents[start].children)) {
    return false;
  }
  return true;
};
const isMirrored = (tree) => {
  if (!tree.root) return false;
  if (tree.root.children.length === 0) return true;
  let parents = [tree.root];
  let q = [...tree.root.children];
  let i = 0;
  let n = q.length;
  if (!isSymmetric(parents)) return false;
  parents = [];
  while (q.length > 0) {
    const node = q.shift();
    parents.push(node);
    q.push(...node.children);
    i++;
    if (i === n && q.length > 0) {
      i = 0;
      n = q.length;
      if (!isSymmetric(parents)) return false;
      parents = [];
    }
  }
  return true;
};

module.exports = {
  isMirrored,
};
