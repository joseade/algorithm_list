const findMissingNumber = (arr) => {
  return arr.reduce((acc, ele, idx) => acc ^ ele ^ (idx + 1), arr.length + 1);
};

module.exports = {
  findMissingNumber,
};
const arr = [1, 8, 3, 4, 5, 6, 7];

console.log(findMissingNumber(arr));
