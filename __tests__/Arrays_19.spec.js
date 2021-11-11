const { isValid } = require("../Arrays_19");

describe("Determine if a series of parenthesis are balanced, and if not, how many parenthesis are missing", () => {
  it("Should work with balanced and unbalanced inputs", () => {
    expect(isValid(")")).toBe(1);
    expect(isValid("(")).toBe(1);
    expect(isValid(")(")).toBe(2);
    expect(isValid("()")).toBeTruthy();
    expect(isValid("(((((")).toBe(5);
    expect(isValid(")(((((")).toBe(6);
    expect(isValid("((()))")).toBeTruthy();
    expect(isValid("((()))(")).toBe(1);
    expect(isValid("((())))")).toBe(1);
    expect(isValid(")()()(")).toBe(2);
    expect(isValid("))))((((((((")).toBe(12);
    expect(isValid("((((((((((((((")).toBe(14);
    expect(isValid("))))))))))))))))")).toBe(16);
  });
});
