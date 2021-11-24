const { longestRunOfTwoNumbers } = require("../Search_09");

describe("Find the largest run of at most two distinct numbers", () => {
  it("Should find largest run in 1212223311212223", () => {
    const str = "1212223311212223";
    expect(longestRunOfTwoNumbers(str)).toBe("1121222");
  });
  it("Should find largest run in 111", () => {
    const str = "111";
    expect(longestRunOfTwoNumbers(str)).toBe("111");
  });
  it("Should find largest run in 1234567899", () => {
    const str = "1234567899";
    expect(longestRunOfTwoNumbers(str)).toBe("899");
  });
  it("Should find largest run in 12111111111", () => {
    const str = "12111111111";
    expect(longestRunOfTwoNumbers(str)).toBe("12111111111");
  });
  it("Should find largest run in 830000094", () => {
    const str = "830000094";
    expect(longestRunOfTwoNumbers(str)).toBe("300000");
  });
});
