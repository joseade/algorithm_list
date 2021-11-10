const flattenRecursively = (arr) => {
  const [first, ...rest] = arr;
  if (!first) return [];
  if (Array.isArray(first))
    return [...flattenRecursively(first), ...flattenRecursively(rest)];
  return [first, ...flattenRecursively(rest)];
};

const flattenIteratively = (arr) => {
  let q = [...arr];
  let result = [];
  while (q.length > 0) {
    let curr = q.pop();
    if (Array.isArray(curr)) {
      q.push(...curr);
    } else {
      result.unshift(curr);
    }
  }
  return result;
};

module.exports = { flattenRecursively, flattenIteratively };
