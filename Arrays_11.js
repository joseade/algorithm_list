const reverseBlocks = (arr, blockSize) => {
  const swap = (arr, start, end) =>
    ([arr[start], arr[end]] = [arr[end], arr[start]]);
  let maxCount = Math.floor(blockSize / 2);
  let count;
  let end;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i >= Math.floor(arr.length / blockSize) * blockSize) {
      const right = arr.length - j - 1;
      if (i < right) {
        swap(arr, i, right);
        j++;
      }
    } else {
      if (i % blockSize === 0) {
        end = i + blockSize - 1;
        count = 0;
      }
      if (count < maxCount) {
        swap(arr, i, end--);
        count++;
      }
    }
  }
};
module.exports = { reverseBlocks };
