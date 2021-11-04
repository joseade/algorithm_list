const findMaxArea = (matrix) => {
  let { length: cols } = matrix[0];
  let histogram = new Array(cols).fill(0);
  let maxArea = 0;
  for (let row of matrix) {
    let i = 0;
    for (let col of row) {
      if (col === 1) histogram[i]++;
      if (col === 0) histogram[i] = 0;
      i++;
    }
    let area = findLargestAreaHistogram(histogram);
    maxArea = Math.max(maxArea, area);
  }
  return maxArea;
};

const findLargestAreaHistogram = (histogram) => {
  const { length } = histogram;
  let maxArea = 0;
  let stack = [];

  for (let right = 0; right <= length; right++) {
    let x = histogram[right] ?? 0;
    let left = right;
    while (
      (({ length: stackLength } = stack),
      stackLength > 0 && x <= stack[stackLength - 1][1])
    ) {
      let height;
      [left, height] = stack.pop();
      let area = height * (right - left);
      maxArea = Math.max(maxArea, area);
    }
    stack.push([left, x]);
  }
  return maxArea;
};

module.exports = { findMaxArea };
