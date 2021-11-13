const { baseConverter } = require("../Arrays_23");

describe("Convert a base 10 number to any other base by making use of stacks", () => {
  it("Convert to base 50 should throw", () => {
    expect(() => baseConverter(2, 50)).toThrow();
  });
  it("Convert to base 2", () => {
    expect(baseConverter(22, 2)).toBe("10110");
  });
  it("Convert to base 5", () => {
    expect(baseConverter(125, 5)).toBe("1000");
  });
  it("Convert to base 16", () => {
    expect(baseConverter(1825478, 16)).toBe("1BDAC6");
  });
  it("Convert to base 24", () => {
    expect(baseConverter(521, 24)).toBe("LH");
  });
  it("Convert to base 30", () => {
    expect(baseConverter(1782936438794, 30)).toBe("2LFLQ2RGE");
  });
  it("Convert to base 34", () => {
    expect(baseConverter(33, 34)).toBe("X");
  });
});
