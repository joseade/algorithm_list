const { sortString } = require("../Strings_01");

describe("Sort characters in string", () => {
  it("Should sort a string of length four, withouth repeated characters", () => {
    let str = "zkhb";
    expect(sortString(str)).toBe("bhkz");
  });
  it("Should sort a string of length eight, with repeated characters", () => {
    let str = "joseluis";
    expect(sortString(str)).toBe("eijlossu");
  });
  it("Should sort a string of length fourteen, with repeated characters", () => {
    let str = "ajklkhdnmabbrx";
    expect(sortString(str)).toBe("aabbdhjkklmnrx");
  });
});
