const setZeroes = (matrix) => {
  const hasZerosFirstRow = (matrix) => {
    const [firstRow] = matrix;
    for (let c of firstRow) {
      if (c === 0) return true;
    }
    return false;
  };

  const hasZerosFirstColumn = (matrix) => {
    for (let r of matrix) {
      if (r[0] === 0) return true;
    }
    return false;
  };

  const movingZeros = (matrix) => {
    for (let i = 1; i < matrix.length; i++) {
      for (let j = 1; j < matrix[0].length; j++) {
        if (matrix[i][j] === 0) {
          matrix[i][0] = 0;
          matrix[0][j] = 0;
        }
      }
    }
  };

  const setRowOfZero = (matrix, r) => {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[r][j] = 0;
    }
  };

  const setColumnOfZero = (matrix, c) => {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][c] = 0;
    }
  };

  let firstRowHasZeros = hasZerosFirstRow(matrix);
  let firstColumnHasZeros = hasZerosFirstColumn(matrix);

  movingZeros(matrix);

  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0] == 0) {
      setRowOfZero(matrix, i);
    }
  }

  for (let j = 1; j < matrix[0].length; j++) {
    if (matrix[0][j] == 0) {
      setColumnOfZero(matrix, j);
    }
  }

  if (firstRowHasZeros) {
    setRowOfZero(matrix, 0);
  }

  if (firstColumnHasZeros) {
    setColumnOfZero(matrix, 0);
  }
};

module.exports = { setZeroes };
