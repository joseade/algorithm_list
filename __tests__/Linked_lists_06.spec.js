const { reverse } = require("../Linked_lists_06");
const { LinkedList } = require("../Linked_list");

describe("Reverse a Linked List", () => {
  it("Should reverse a linked list containing one node", () => {
    const l = new LinkedList();
    l.addFirst(4);

    expect(l.toArray()).toStrictEqual([4]);
    reverse(l);
    expect(l.toArray()).toStrictEqual([4]);
  });

  it("Should reverse a linked list containing two nodes", () => {
    const l = new LinkedList();
    l.addFirst(4);
    l.addFirst(5);

    expect(l.toArray()).toStrictEqual([5, 4]);
    reverse(l);
    expect(l.toArray()).toStrictEqual([4, 5]);
  });

  it("Should reverse a linked list containing three nodes", () => {
    const l = new LinkedList();
    l.addFirst(1);
    l.addFirst(2);
    l.addFirst(5);

    expect(l.toArray()).toStrictEqual([5, 2, 1]);
    reverse(l);
    expect(l.toArray()).toStrictEqual([1, 2, 5]);
  });

  it("Should reverse a linked list containing four nodes", () => {
    const l = new LinkedList();
    l.addFirst(-11);
    l.addFirst(2);
    l.addFirst(0);
    l.addFirst(5);

    expect(l.toArray()).toStrictEqual([5, 0, 2, -11]);
    reverse(l);
    expect(l.toArray()).toStrictEqual([-11, 2, 0, 5]);
  });

  it("Should reverse a linked list containing ten nodes", () => {
    const l = new LinkedList();
    l.addFirst(1);
    l.addFirst(2);
    l.addFirst(3);
    l.addFirst(4);
    l.addFirst(5);
    l.addFirst(6);
    l.addFirst(7);
    l.addFirst(8);
    l.addFirst(9);
    l.addFirst(10);

    expect(l.toArray()).toStrictEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    reverse(l);
    expect(l.toArray()).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
