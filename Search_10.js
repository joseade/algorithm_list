const findMajority = (arr) => {
  let h = {};
  for (let ele of arr) {
    h[ele] = h[ele] + 1 || 1;
    if (h[ele] > arr.length / 2) return ele;
  }
};

module.exports = {
  findMajority,
};
