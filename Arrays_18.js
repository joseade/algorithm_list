const storeSparseMatrix = (sparseMatrix) => {
  const { length: rows } = sparseMatrix;
  const { length: columns } = sparseMatrix[0];
  let compactMatrix = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (sparseMatrix[r][c] !== 0) {
        compactMatrix.push([r + 1, c + 1, sparseMatrix[r][c]]);
      }
    }
  }
  // First row containing the number of rows, columns and non-zero elements
  compactMatrix.unshift([rows, columns, compactMatrix.length]);
  return compactMatrix;
};

module.exports = { storeSparseMatrix };
