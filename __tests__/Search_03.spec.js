const { SecondLargest } = require("../Search_03");

describe("Find the 2nd largest number in a stream", () => {
  it("Should find the 2nd largest number in an stream which starts with a length two", () => {
    const secondLargest = new SecondLargest([5, -2]);
    expect(secondLargest.add(0)).toBe(0);
    expect(secondLargest.add(40)).toBe(5);
    expect(secondLargest.add(1)).toBe(5);
    expect(secondLargest.add(41)).toBe(40);
    expect(secondLargest.add(-100)).toBe(40);
    expect(secondLargest.add(50)).toBe(41);
    expect(secondLargest.add(3)).toBe(41);
    expect(secondLargest.add(80)).toBe(50);
  });
});
