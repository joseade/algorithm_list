const { findRoutes } = require("../Arrays_14");

describe("Given the start and end position of an NxM matrix, find all possible routes from start to end given the only valid movements of right or down.", () => {
  it("Should find two routes starting from 1x1 up to 2x2", () => {
    const initialPosition = { row: 1, column: 1 };
    const terminalPosition = { row: 2, column: 2 };

    expect(findRoutes(initialPosition, terminalPosition)).toBe(2);
  });

  it("Should find ten routes starting from 1x1 up to 4x3", () => {
    const initialPosition = { row: 1, column: 1 };
    const terminalPosition = { row: 4, column: 3 };

    expect(findRoutes(initialPosition, terminalPosition)).toBe(10);
  });

  it("Should find one route starting from 1x1 up to 30x1", () => {
    const initialPosition = { row: 1, column: 1 };
    const terminalPosition = { row: 30, column: 1 };

    expect(findRoutes(initialPosition, terminalPosition)).toBe(1);
  });

  it("Should find six routes starting from 5x5 up to 6x10", () => {
    const initialPosition = { row: 5, column: 5 };
    const terminalPosition = { row: 6, column: 10 };

    expect(findRoutes(initialPosition, terminalPosition)).toBe(6);
  });
});
