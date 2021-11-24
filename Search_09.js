const updateIndexes = (start, end, res) => {
  if (end - start > res.end - res.start) {
    res.start = start;
    res.end = end;
  }
  return;
};
const longestRunOfTwoNumbers = (str) => {
  let start = 0;
  let end = 0;
  let q = [];
  let res = { start: 0, end: 0 };
  while (end < str.length) {
    if (q.length < 2 && !q.includes(str[end])) {
      q.push(str[end++]);
      updateIndexes(start, end, res);
      continue;
    }
    if (q.length <= 2 && q.includes(str[end])) {
      end++;
      updateIndexes(start, end, res);
      continue;
    }
    if (q.length === 2 && !q.includes(str[end])) {
      let i = start;
      const last = q.shift();
      while (i < end) {
        if (str[i] === last) {
          start = i + 1;
        }
        i++;
      }
      q.push(str[end++]);
      updateIndexes(start, end, res);
    }
  }
  return str.substring(res.start, res.end);
};

module.exports = {
  longestRunOfTwoNumbers,
};
