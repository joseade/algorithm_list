const findConsecutive = (n) => {
  let left = 1;
  let right = 1;
  let total = 1;
  let q = [];
  while (left <= n / 2) {
    if (total < n) {
      right++;
      total += right;
    } else if (total > n) {
      total -= left;
      left++;
    } else if (total === n) {
      q.push([left, right]);
      total -= left;
      left++;
    }
  }
  return q.length > 0 ? q : false;
};

module.exports = {
  findConsecutive,
};
