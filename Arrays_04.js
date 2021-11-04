const obtainGroupOfOnes = (matrix) => {
  const { length: rows } = matrix;
  const { length: columns } = matrix[0];
  let numberGroupOfOne = 0;

  const moveToLeft = (r, c) => {
    if (c === 0) return false;
    return matrix[r][c - 1] === 1 ? true : false;
  };
  const moveToRight = (r, c) => {
    if (c === columns - 1) return false;
    return matrix[r][c + 1] === 1 ? true : false;
  };
  const moveToDown = (r, c) => {
    if (r === rows - 1) return false;
    return matrix[r + 1][c] === 1 ? true : false;
  };

  const moveToUp = (r, c) => {
    if (r === 0) return false;
    return matrix[r - 1][c] === 1 ? true : false;
  };

  const constructPath = (startingRow, startingColumn) => {
    const q = [];
    q.push([startingRow, startingColumn]);
    while (q.length > 0) {
      const [r, c] = q.shift();
      matrix[r][c] = 0;
      if (moveToRight(r, c)) {
        q.push([r, c + 1]);
      }
      if (moveToLeft(r, c)) {
        q.push([r, c - 1]);
      }
      if (moveToUp(r, c)) {
        q.push([r - 1, c]);
      }
      if (moveToDown(r, c)) {
        q.push([r + 1, c]);
      }
    }
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (matrix[r][c] === 1) {
        numberGroupOfOne++;
        constructPath(r, c);
      }
    }
  }
  return numberGroupOfOne;
};

module.exports = { obtainGroupOfOnes };
