const searchMatrix = function (matrix, target) {
  const { length: rows } = matrix;
  const { length: cols } = matrix[0];
  let start = 0;
  let end = rows * cols - 1;
  while (start <= end) {
    let mid = Math.floor((end + start) / 2);
    let r = Math.floor(mid / cols);
    let c = mid % cols;
    if (matrix[r][c] === target) return [++r, ++c];
    if (matrix[r][c] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

module.exports = { searchMatrix };
