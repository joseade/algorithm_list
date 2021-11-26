const isCombination = (str1, str2, goal) => {
  let h = {};
  for (let c of str1) {
    h[c] = h[c] + 1 || 1;
  }
  for (let c of str2) {
    h[c] = h[c] + 1 || 1;
  }
  for (let c of goal) {
    if (!h[c]) return false;
    if (h[c]) {
      h[c] = h[c] - 1;
    }
    if (h[c] < 0) return false;
  }
  return true;
};

module.exports = {
  isCombination,
};
