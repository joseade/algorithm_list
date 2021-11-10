const findRoutes = (initialPosition, terminalPosition) => {
  const m = terminalPosition.row - initialPosition.row + 1;
  const n = terminalPosition.column - initialPosition.column + 1;
  let rowVector = new Array(n).fill(1);
  for (let i = 0; i < m - 1; i++) {
    let r = new Array(n).fill(1);
    for (let j = n - 2; j > -1; j--) {
      r[j] = r[j + 1] + rowVector[j];
    }
    rowVector = [...r];
  }
  return rowVector[0];
};

module.exports = { findRoutes };
