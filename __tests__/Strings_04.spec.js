const { isRotation } = require("../Strings_04");

describe("Determine if a string is a rotation of another", () => {
  it("Should compare a string of length one with another which is a rotation of the former", () => {
    let str1 = "A";
    let str2 = "A";
    expect(isRotation(str1, str2)).toBeTruthy();
  });
  it("Should compare a string of length one with another which is not a rotation of the former", () => {
    let str1 = "A";
    let str2 = "AB";
    expect(isRotation(str1, str2)).toBeFalsy();
  });
  it("Should compare a string of length four with every of its rotations", () => {
    let str1 = "ABCD";
    let str2 = "ABCD";
    expect(isRotation(str1, str2)).toBeTruthy();
    str2 = "BCDA";
    expect(isRotation(str1, str2)).toBeTruthy();
    str2 = "CDAB";
    expect(isRotation(str1, str2)).toBeTruthy();
    str2 = "DABC";
    expect(isRotation(str1, str2)).toBeTruthy();
  });
  it("Should compare a string of length ten with another which is not a rotation of the former", () => {
    let str1 = "aAbBcCdDeF";
    let str2 = "BcCdDeFaAb";
    expect(isRotation(str1, str2)).toBeTruthy();
  });
});
