const isPermutation = (str, goal) => {
  if (str.length !== goal.length) return false;
  let table = {};
  for (let c of str) {
    table[c] = table[c] + 1 || 1;
  }
  for (let c of goal) {
    if (table[c] === undefined) return false;
    if (--table[c] < 0) return false;
  }
  return true;
};

module.exports = {
  isPermutation,
};
