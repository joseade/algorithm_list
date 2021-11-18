const { detectCycle } = require("../Linked_lists_02");
const { LinkedList } = require("../Linked_list");

describe("Find the node at the beginning of a loop in a singly linked list", () => {
  it("Should find every loop in a linked list containing five nodes", () => {
    const l = new LinkedList();
    l.addFirst(3);
    l.addFirst(2);
    l.addFirst(1);
    l.addFirst(0);
    l.addFirst(-1);
    l.tail.next = l.head;
    expect(detectCycle(l).value).toBe(-1);
    l.tail.next = l.head.next;
    expect(detectCycle(l).value).toBe(0);
    l.tail.next = l.head.next.next;
    expect(detectCycle(l).value).toBe(1);
    l.tail.next = l.head.next.next.next;
    expect(detectCycle(l).value).toBe(2);
    l.tail.next = l.head.next.next.next.next;
    expect(detectCycle(l).value).toBe(3);
  });
  it("Should return false with a linked list containing six nodes with no loops", () => {
    const l = new LinkedList();
    l.addFirst(4);
    l.addFirst(3);
    l.addFirst(2);
    l.addFirst(1);
    l.addFirst(0);
    l.addFirst(-1);
    expect(detectCycle(l)).toBeFalsy();
  });
  it("Should find a loop in a linked list containing nine nodes", () => {
    const l = new LinkedList();
    l.addFirst(1);
    l.addFirst(2);
    l.addFirst(7);
    l.addFirst(6);
    l.addFirst(3);
    l.addFirst(3);
    l.addFirst(2);
    l.addFirst(2);
    l.addFirst(1);
    console.log(l.toArray());

    l.tail.next = l.head.next.next.next;
    const node = detectCycle(l);
    expect(node.value).toBe(3);
    expect(node.next.value).toBe(3);
  });
});
