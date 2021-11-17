const words = require("./english-words.json");

const findAnagrams = (str) => {
  const filteredWords = words.filter(
    (w) => w.length === str.length && w !== str
  );
  const res = filteredWords.filter((f) => isPermutation(f, str));
  return res;
};

const isPermutation = (s, goal) => {
  if (s.length !== goal.length) return false;
  let table = {};
  for (let c of s) {
    table[c] = table[c] + 1 || 1;
  }
  for (let c of goal) {
    if (table[c] === undefined) return false;
    if (--table[c] < 0) return false;
  }
  return true;
};

module.exports = {
  findAnagrams,
};
