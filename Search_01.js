const words = require("./english-words.json");

const findLongestWord = (str) => {
  let table = {};
  for (let char of str) {
    table[char] = true;
  }

  let length = 0;
  let res = {};

  words.forEach((w) => {
    for (let c of w) {
      if (!table[c]) return;
    }

    if (w.length < length) return;
    if (w.length === length) {
      res = { ...res, [w]: w };
    }
    length = w.length;
    res = { [w]: w };
  });
  return res;
};

module.exports = {
  findLongestWord,
};
