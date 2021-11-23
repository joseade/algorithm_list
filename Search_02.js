const findSecondLargest = (arr) => {
  let first = -Infinity;
  let second = -Infinity;

  for (let n of arr) {
    if (n > first) {
      [first, second] = [n, first];
    } else if (n > second) {
      second = n;
    }
  }

  return second;
};

module.exports = { findSecondLargest };

const arr = [-90, 100, -104];
console.log(findSecondLargest(arr));
