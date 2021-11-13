const { hotPotato } = require("../Arrays_24");

describe("Hot-potato simulation", () => {
  it("Simulation with two contestants", () => {
    const names = ["A", "B"];
    const result = hotPotato(names, 30);
    expect(result.winner).toBe("B");
    expect(result.losers).toStrictEqual(["A"]);
  });
  it("Simulation with two contestants", () => {
    const names = ["A", "B"];
    const result = hotPotato(names, 31);
    expect(result.winner).toBe("A");
    expect(result.losers).toStrictEqual(["B"]);
  });
  it("Simulation with five contestants", () => {
    const names = ["A", "B", "C", "D", "E"];
    const result = hotPotato(names, 7);
    expect(result.winner).toBe("A");
    expect(result.losers).toStrictEqual(["C", "B", "E", "D"]);
  });
  it("Simulation with nine contestants", () => {
    const names = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
    const result = hotPotato(names, 2);
    expect(result.winner).toBe("A");
    console.log(result.losers);
    expect(result.losers).toStrictEqual([
      "C",
      "F",
      "I",
      "D",
      "H",
      "E",
      "B",
      "G",
    ]);
  });
});
