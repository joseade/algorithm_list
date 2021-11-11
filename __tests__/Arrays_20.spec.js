const { isValid } = require("../Arrays_20");

describe("Check if an expression consisting of parenthesis, square brackets and curly brackets is balanced", () => {
  it("Should work with balanced and unbalanced inputs", () => {
    expect(isValid(")")).toBeFalsy();
    expect(isValid("(")).toBeFalsy();
    expect(isValid(")(")).toBeFalsy();
    expect(isValid("()")).toBeTruthy();
    expect(isValid("(((((")).toBeFalsy();
    expect(isValid(")(((((")).toBeFalsy();
    expect(isValid("((()))")).toBeTruthy();
    expect(isValid("((()))(")).toBeFalsy();
    expect(isValid("((())))")).toBeFalsy();
    expect(isValid(")()()(")).toBeFalsy();
    expect(isValid("))))((((((((")).toBeFalsy();
    expect(isValid("((((((((((((((")).toBeFalsy();
    expect(isValid("))))))))))))))))")).toBeFalsy();
    expect(isValid("[")).toBeFalsy();
    expect(isValid("]")).toBeFalsy();
    expect(isValid("{")).toBeFalsy();
    expect(isValid("}")).toBeFalsy();
    expect(isValid("[]")).toBeTruthy();
    expect(isValid("{}")).toBeTruthy();
    expect(isValid("[)")).toBeFalsy();
    expect(isValid("{]")).toBeFalsy();
    expect(isValid("([{}])")).toBeTruthy();
    expect(isValid("([{}])([{}])")).toBeTruthy();
    expect(isValid("([{}]){([])}")).toBeTruthy();
    expect(isValid("}([{}])([{}])")).toBeFalsy();
  });
});
