const findSmallestSubstring = (s, t) => {
  if (s.length === 0 || t.length === 0) {
    return "";
  }
  let l = 0;
  let r = 0;
  let res = { left: 0, right: 0, size: -1 };
  const m = new Map();

  while (r < s.length) {
    let c = s[r];
    if (t.includes(c) && m.size < t.length) {
      m.set(c, m.get(c) + 1 || 1);
    }
    while (l <= r && m.size === t.length) {
      let c = s[l];
      if (res.size === -1 || r - l + 1 < res.size) {
        res.left = l;
        res.right = r;
        res.size = r - l + 1;
      }
      if (t.includes(c)) {
        m.set(c, m.get(c) - 1);
      }
      if (m.get(c) === 0) {
        m.delete(c);
      }
      l++;
    }
    r++;
  }
  return res.size === -1 ? "" : s.substring(res.left, res.right + 1);
};

module.exports = {
  findSmallestSubstring,
};
