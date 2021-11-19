const { PriorityQueue } = require("../Linked_lists_07");

describe("Implement a priority queue with a linked list", () => {
  it("Should create a priority queue and test the methods insert,remove,peek", () => {
    const q = new PriorityQueue();
    q.insert("Go to the school", 1);
    expect(q.peek().value).toBe("Go to the school");
    expect(q.peek().priority).toBe(1);

    q.insert("Play soccer", 90);
    expect(q.peek().value).toBe("Play soccer");
    expect(q.peek().priority).toBe(90);

    q.insert("Listen to music", 3);
    expect(q.peek().value).toBe("Play soccer");
    expect(q.peek().priority).toBe(90);

    q.insert("Look after the dog", 8);
    expect(q.peek().value).toBe("Play soccer");
    expect(q.peek().priority).toBe(90);

    q.insert("Watch TV", 5);
    expect(q.peek().value).toBe("Play soccer");
    expect(q.peek().priority).toBe(90);

    let removed = q.remove();
    expect(removed.value).toBe("Play soccer");
    expect(removed.priority).toBe(90);
    expect(q.peek().value).toBe("Look after the dog");
    expect(q.peek().priority).toBe(8);

    removed = q.remove();
    expect(removed.value).toBe("Look after the dog");
    expect(removed.priority).toBe(8);
    expect(q.peek().value).toBe("Watch TV");
    expect(q.peek().priority).toBe(5);
  });
});
