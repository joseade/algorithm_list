const findBalancingIndex = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let leftSum = arr[0];
  let rightSum = arr[right];
  while (left < right) {
    if (leftSum === rightSum && left + 1 === right) return left;
    if (leftSum < rightSum) {
      leftSum += arr[++left];
    } else {
      rightSum += arr[--right];
    }
  }
  return -1;
};

module.exports = { findBalancingIndex };
