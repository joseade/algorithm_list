const printCountUp = (n) => {
  if (n === 1) {
    console.log(n);
    return 1;
  }
  const res = printCountUp(n - 1) + 1;
  console.log(res);
  return res;
};

module.exports = { printCountUp };
