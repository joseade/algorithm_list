const { rotateMatrixToLeftBy90 } = require("../Arrays_05");

describe("Rotate a square matrix of numbers counterclockwise by 90 deg", () => {
  it("should rotate a 5x5 matrix", () => {
    const matrix = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];
    rotateMatrixToLeftBy90(matrix);
    expect(matrix).toStrictEqual([
      [5, 10, 15, 20, 25],
      [4, 9, 14, 19, 24],
      [3, 8, 13, 18, 23],
      [2, 7, 12, 17, 22],
      [1, 6, 11, 16, 21],
    ]);
  });

  it("should rotate a 2x2 matrix", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    rotateMatrixToLeftBy90(matrix);
    expect(matrix).toStrictEqual([
      [2, 4],
      [1, 3],
    ]);
  });

  it("should rotate a 3x3 Identity matrix", () => {
    const matrix = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];
    rotateMatrixToLeftBy90(matrix);
    expect(matrix).toStrictEqual([
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
    ]);
  });

  it("should rotate a 1x1  matrix", () => {
    const matrix = [[50]];
    rotateMatrixToLeftBy90(matrix);
    expect(matrix).toStrictEqual([[50]]);
  });
});
