const isValid = (str) => {
  const s = [];
  for (let c of str) {
    if (c === "(") {
      s.push(c);
    }
    if (c === ")" && (s.length === 0 || s[s.length - 1] === ")")) {
      s.push(c);
    }
    if (c === ")" && s.length > 0 && s[s.length - 1] === "(") {
      s.pop();
    }
  }
  return s.length > 0 ? s.length : true;
};

module.exports = { isValid };
