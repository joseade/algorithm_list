const rotateMatrixToLeftBy90 = (matrix) => {
  const { length } = matrix;

  const constructRing = (i, j, length) => {
    const temp = matrix[i][j];
    moveFromRightToTop(i, j, length);
    moveFromBottomToRight(i, j, length);
    moveFromLeftToBottom(i, j, length);
    moveFromTopToLeft(i, j, length, temp);
  };

  const moveFromRightToTop = (i, j, length) => {
    matrix[i][j] = matrix[j][length - 1 - i];
  };
  const moveFromBottomToRight = (i, j, length) => {
    matrix[j][length - 1 - i] = matrix[length - 1 - i][length - 1 - j];
  };
  const moveFromLeftToBottom = (i, j, length) => {
    matrix[length - 1 - i][length - 1 - j] = matrix[length - 1 - j][i];
  };

  const moveFromTopToLeft = (i, j, length, temp) => {
    matrix[length - 1 - j][i] = temp;
  };

  for (let i = 0; i < length / 2; i++) {
    for (let j = i; j < length - i - 1; j++) {
      constructRing(i, j, length);
    }
  }
};

module.exports = { rotateMatrixToLeftBy90 };
