const { findMiddleNode } = require("../Linked_lists_01");
const { LinkedList } = require("../Linked_list");

describe("Find the middle node of a single linked list", () => {
  it("Should find the middle node of a single linked list containing one node", () => {
    const l = new LinkedList();
    l.addFirst(1);
    expect(findMiddleNode(l).value).toBe(1);
  });
  it("Should find the middle node of a single linked list containing two nodes", () => {
    const l = new LinkedList();
    l.addFirst(1);
    l.addFirst(2);
    expect(findMiddleNode(l).value).toBe(1);
  });
  it("Should find the middle node of a single linked list containing three nodes", () => {
    const l = new LinkedList();
    l.addFirst(1);
    l.addFirst(2);
    l.addFirst(3);
    expect(findMiddleNode(l).value).toBe(2);
  });
  it("Should find the middle node of a single linked list containing four nodes", () => {
    const l = new LinkedList();
    l.addFirst(1);
    l.addFirst(2);
    l.addFirst(3);
    l.addFirst(4);
    expect(findMiddleNode(l).value).toBe(2);
  });
  it("Should find the middle node of a single linked list containing nine nodes", () => {
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
    expect(findMiddleNode(l).value).toBe(5);
  });
});
