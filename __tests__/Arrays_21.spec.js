const { numberOfCrossings } = require("../Arrays_21");

describe("Given a set of N cars, determine the number of times cars will pass each other", () => {
  it("Simulation with one car traveling to the right", () => {
    let cars = ["r", "l", "l", "l", "l", "l"];
    expect(numberOfCrossings(cars)).toBe(5);
  });
  it("Simulation with one car traveling to the left", () => {
    let cars = ["r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "l"];
    expect(numberOfCrossings(cars)).toBe(10);
  });
  it("Simulation with seven cars traveling in randomn directions", () => {
    let cars = ["r", "l", "r", "r", "l", "l", "r"];
    expect(numberOfCrossings(cars)).toBe(7);
  });
  it("Simulation with three cars traveling to the right", () => {
    let cars = ["r", "r", "r"];
    expect(numberOfCrossings(cars)).toBe(0);
  });
  it("Simulation with five cars traveling to the left", () => {
    let cars = ["l", "l", "l", "l", "l"];
    expect(numberOfCrossings(cars)).toBe(0);
  });
  it("Simulation with fourteen cars traveling in randomn directions", () => {
    let cars = [
      "r",
      "l",
      "r",
      "r",
      "l",
      "r",
      "r",
      "l",
      "l",
      "r",
      "r",
      "l",
      "l",
      "r",
    ];
    expect(numberOfCrossings(cars)).toBe(28);
  });
});
