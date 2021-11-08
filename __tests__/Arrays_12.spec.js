const { CircularQueue } = require("../Arrays_12");

describe("Implement a circular queue", () => {
  const size = 4;
  const newCircularQueue = new CircularQueue(4);
  it("Should create an instance of the circular queue class", () => {
    expect(newCircularQueue.q).toStrictEqual([, , , ,]);
    expect(newCircularQueue.front).toBe(-1);
    expect(newCircularQueue.rear).toBe(-1);
    expect(newCircularQueue.size).toBe(size);
  });
  it("Should analize the methods enQueue, deQueue, front, rear, isEmpty, isFull", () => {
    expect(newCircularQueue.isEmpty()).toBe(true);
    expect(newCircularQueue.isFull()).toBe(false);
    expect(newCircularQueue.deQueue()).toBe(false);
    expect(newCircularQueue.enQueue(0)).toBe(true);
    expect(newCircularQueue.q).toStrictEqual([0, , , ,]);
    expect(newCircularQueue.front).toBe(0);
    expect(newCircularQueue.rear).toBe(0);
    expect(newCircularQueue.Front()).toBe(0);
    expect(newCircularQueue.Rear()).toBe(0);
    expect(newCircularQueue.enQueue(6)).toBe(true);
    expect(newCircularQueue.q).toStrictEqual([0, 6, , ,]);
    expect(newCircularQueue.front).toBe(0);
    expect(newCircularQueue.rear).toBe(1);
    expect(newCircularQueue.Front()).toBe(0);
    expect(newCircularQueue.Rear()).toBe(6);
    expect(newCircularQueue.enQueue(9)).toBe(true);
    expect(newCircularQueue.enQueue(10)).toBe(true);
    expect(newCircularQueue.isFull()).toBe(true);
    expect(newCircularQueue.q).toStrictEqual([0, 6, 9, 10]);
    expect(newCircularQueue.front).toBe(0);
    expect(newCircularQueue.rear).toBe(3);
    expect(newCircularQueue.Front()).toBe(0);
    expect(newCircularQueue.Rear()).toBe(10);
    expect(newCircularQueue.isFull()).toBe(true);
    expect(newCircularQueue.enQueue(5)).toBe(false);
    expect(newCircularQueue.deQueue()).toBe(true);
    expect(newCircularQueue.deQueue()).toBe(true);
    expect(newCircularQueue.q).toStrictEqual([undefined, undefined, 9, 10]);
    expect(newCircularQueue.isFull()).toBe(false);
    expect(newCircularQueue.Front()).toBe(9);
    expect(newCircularQueue.Rear()).toBe(10);
    expect(newCircularQueue.front).toBe(2);
    expect(newCircularQueue.rear).toBe(3);
  });
});
