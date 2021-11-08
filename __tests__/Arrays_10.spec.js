const { shuffle } = require("../Arrays_10");

describe("Shuffle an array", () => {
  it("Should shuffle an array of length 6", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const firstArray = [...arr];
    shuffle(arr);
    expect(arr).toEqual(expect.arrayContaining(firstArray));
    shuffle(arr);
    expect(arr).toEqual(expect.arrayContaining(firstArray));
    shuffle(arr);
    expect(arr).toEqual(expect.arrayContaining(firstArray));
  });
});
