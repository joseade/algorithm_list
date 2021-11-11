var isValid = function (str) {
  const table = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const s = [];
  for (let c of str) {
    if (table[c]) {
      s.push(c);
    } else if (s.length === 0 || table[s.pop()] !== c) {
      return false;
    }
  }
  return s.length === 0;
};

module.exports = { isValid };
