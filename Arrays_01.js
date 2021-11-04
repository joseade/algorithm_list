const maxValue = (arr) => {
  const { length } = arr;
  if (length === 1) return arr[0];
  if (length === 2) return arr[0] > arr[1] ? arr[0] : arr[1];
  const [first, ...rest] = arr;
  console.log(first, rest);
  return maxValue([first, maxValue(rest)]);
};

module.exports = { maxValue };
