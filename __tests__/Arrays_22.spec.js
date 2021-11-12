const { fishesAlive } = require("../Arrays_22");

describe("There is a set of N fish that travel in one of two possible directions. Determine how many fish will be alive at the end of any given arrangement", () => {
  it("Simulation with one fish traveling to the left", () => {
    let fishes = [{ value: 3, direction: "l" }];
    expect(fishesAlive(fishes)).toBe(1);
  });
  it("Simulation with one fish traveling to the right", () => {
    let fishes = [{ value: 3, direction: "r" }];
    expect(fishesAlive(fishes)).toBe(1);
  });
  it("Simulation with two fishes traveling in random directions", () => {
    let fishes = [
      { value: 2, direction: "l" },
      { value: 6, direction: "r" },
    ];
    expect(fishesAlive(fishes)).toBe(2);
  });
  it("Simulation with two fishes traveling in random directions", () => {
    let fishes = [
      { value: 2, direction: "l" },
      { value: 6, direction: "l" },
    ];
    expect(fishesAlive(fishes)).toBe(2);
  });
  it("Simulation with two fishes traveling in random directions", () => {
    let fishes = [
      { value: 2, direction: "r" },
      { value: 6, direction: "r" },
    ];
    expect(fishesAlive(fishes)).toBe(2);
  });
  it("Simulation with two fishes traveling in random directions", () => {
    let fishes = [
      { value: 2, direction: "r" },
      { value: 6, direction: "l" },
    ];
    expect(fishesAlive(fishes)).toBe(1);
  });
  it("Simulation with two fishes traveling in random directions", () => {
    let fishes = [
      { value: 8, direction: "r" },
      { value: 6, direction: "l" },
    ];
    expect(fishesAlive(fishes)).toBe(1);
  });
  it("Simulation with four fishes traveling in random directions", () => {
    let fishes = [
      { value: 8, direction: "r" },
      { value: 5, direction: "r" },
      { value: 6, direction: "l" },
      { value: 9, direction: "l" },
    ];
    expect(fishesAlive(fishes)).toBe(1);
  });
  it("Simulation with seven fishes traveling in random directions", () => {
    let fishes = [
      { value: 2, direction: "l" },
      { value: 6, direction: "r" },
      { value: 1, direction: "r" },
      { value: 7, direction: "l" },
      { value: 5, direction: "l" },
      { value: 4, direction: "r" },
      { value: 3, direction: "l" },
    ];
    expect(fishesAlive(fishes)).toBe(4);
  });
  it("Simulation with seven fishes traveling in random directions", () => {
    let fishes = [
      { value: 2, direction: "l" },
      { value: 8, direction: "r" },
      { value: 1, direction: "r" },
      { value: 7, direction: "l" },
      { value: 5, direction: "l" },
      { value: 4, direction: "r" },
      { value: 3, direction: "l" },
    ];
    expect(fishesAlive(fishes)).toBe(3);
  });
  it("Simulation with nine fishes traveling in random directions", () => {
    let fishes = [
      { value: 2, direction: "l" },
      { value: 8, direction: "r" },
      { value: 1, direction: "r" },
      { value: 7, direction: "l" },
      { value: 5, direction: "l" },
      { value: 4, direction: "r" },
      { value: 30, direction: "l" },
      { value: 9, direction: "r" },
      { value: 10, direction: "l" },
    ];
    expect(fishesAlive(fishes)).toBe(3);
  });
});
