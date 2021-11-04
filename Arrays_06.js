const mergeArrays = (largeArray, smallArray) => {
  const { length: lengthLargeArray } = largeArray;
  const { length: lengthSmallArray } = smallArray;

  let i = 0;
  let j = 0;
  let q = [largeArray[0]];

  while (i < lengthLargeArray) {
    if (j === lengthSmallArray && q.length > 0) {
      largeArray[i++] = q.shift();
    }
    if (j < lengthSmallArray && q.length > 0 && q[0] < smallArray[j]) {
      largeArray[i++] = q.shift();
      largeArray[i] && q.push(largeArray[i]);
    } else if (j < lengthSmallArray) {
      largeArray[i++] = smallArray[j++];
      largeArray[i] && q.push(largeArray[i]);
    }
  }
};

module.exports = { mergeArrays };
