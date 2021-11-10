const { TriangularArray } = require("../Arrays_17");

describe("Optimize space through triangular arrays", () => {
  it("Triangular array of a square matrix containing 4 rows", () => {
    const t = new TriangularArray(4);
    t.setValue(101, 2, 1);
    t.setValue(102, 3, 1);
    t.setValue(103, 3, 2);
    t.setValue(104, 4, 1);
    t.setValue(105, 4, 2);
    t.setValue(106, 4, 3);
    expect(t.values).toStrictEqual([101, 102, 103, 104, 105, 106]);
    expect(t.getValue(1, 2)).toBe(101);
    expect(t.getValue(1, 3)).toBe(102);
    expect(t.getValue(2, 3)).toBe(103);
    expect(t.getValue(1, 4)).toBe(104);
    expect(t.getValue(2, 4)).toBe(105);
    expect(t.getValue(3, 4)).toBe(106);
    expect(() => t.getValue(1, 1)).toThrow();
    expect(() => t.getValue(6, 1)).toThrow();
    expect(() => t.getValue(2, 10)).toThrow();
  });

  it("Triangular array of a square matrix containing 6 rows", () => {
    const t = new TriangularArray(6);
    t.setValue(51, 2, 1);
    t.setValue(52, 3, 1);
    t.setValue(53, 3, 2);
    t.setValue(54, 4, 1);
    t.setValue(55, 4, 2);
    t.setValue(56, 4, 3);
    t.setValue(57, 5, 1);
    t.setValue(58, 5, 2);
    t.setValue(59, 5, 3);
    t.setValue(60, 5, 4);
    t.setValue(61, 6, 1);
    t.setValue(62, 6, 2);
    t.setValue(63, 6, 3);
    t.setValue(64, 6, 4);
    t.setValue(65, 6, 5);
    expect(t.values).toStrictEqual([
      51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65,
    ]);
    expect(t.getValue(1, 2)).toBe(51);
    expect(t.getValue(1, 3)).toBe(52);
    expect(t.getValue(2, 3)).toBe(53);
    expect(t.getValue(1, 4)).toBe(54);
    expect(t.getValue(2, 4)).toBe(55);
    expect(t.getValue(3, 4)).toBe(56);
    expect(t.getValue(1, 5)).toBe(57);
    expect(t.getValue(2, 5)).toBe(58);
    expect(t.getValue(3, 5)).toBe(59);
    expect(t.getValue(4, 5)).toBe(60);
    expect(t.getValue(1, 6)).toBe(61);
    expect(t.getValue(2, 6)).toBe(62);
    expect(t.getValue(3, 6)).toBe(63);
    expect(t.getValue(4, 6)).toBe(64);
    expect(t.getValue(5, 6)).toBe(65);
    expect(() => t.getValue(1, 1)).toThrow();
    expect(() => t.getValue(9, 1)).toThrow();
    expect(() => t.getValue(2, 10)).toThrow();
  });
});
