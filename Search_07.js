const smallestSubstring = (str) => {
  const h = {};
  const res = [];
  const visited = new Set();

  for (let c of str) {
    h[c] = h[c] + 1 || 1;
  }

  for (let c of str) {
    h[c]--;
    if (visited.has(c)) continue;
    while (
      res.length > 0 &&
      c < res[res.length - 1] &&
      h[res[res.length - 1]] > 0
    ) {
      let d = res.pop();
      visited.delete(d);
    }
    res.push(c);
    visited.add(c);
  }
  return res.join("");
};

module.exports = {
  smallestSubstring,
};
