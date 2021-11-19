const { sortList } = require("../Linked_lists_04");
const { LinkedList } = require("../Linked_list");

describe("Implement merge sort for linked lists", () => {
  it("Should sort a linked list containing one node", () => {
    const l = new LinkedList();
    l.addFirst(4);

    const sortedList = sortList(l.head);
    expect(sortedList.value).toBe(4);
  });
  it("Should sort a linked list containing two nodes", () => {
    const l = new LinkedList();
    l.addFirst(-30);
    l.addFirst(1);

    const sortedList = sortList(l.head);
    expect(sortedList.value).toBe(-30);
    expect(sortedList.next.value).toBe(1);
  });
  it("Should sort a linked list containing three nodes", () => {
    const l = new LinkedList();
    l.addFirst(-30);
    l.addFirst(1);
    l.addFirst(5);

    const sortedList = sortList(l.head);
    expect(sortedList.value).toBe(-30);
    expect(sortedList.next.value).toBe(1);
    expect(sortedList.next.next.value).toBe(5);
  });
  it("Should sort a linked list containing four nodes", () => {
    const l = new LinkedList();
    l.addFirst(-30);
    l.addFirst(-2);
    l.addFirst(1);
    l.addFirst(5);

    const sortedList = sortList(l.head);
    expect(sortedList.value).toBe(-30);
    expect(sortedList.next.value).toBe(-2);
    expect(sortedList.next.next.value).toBe(1);
    expect(sortedList.next.next.next.value).toBe(5);
  });
  it("Should sort a linked list containing five nodes", () => {
    const l = new LinkedList();
    l.addFirst(-30);
    l.addFirst(-2);
    l.addFirst(1);
    l.addFirst(-3);
    l.addFirst(5);

    const sortedList = sortList(l.head);
    expect(sortedList.value).toBe(-30);
    expect(sortedList.next.value).toBe(-3);
    expect(sortedList.next.next.value).toBe(-2);
    expect(sortedList.next.next.next.value).toBe(1);
    expect(sortedList.next.next.next.next.value).toBe(5);
  });
  it("Should sort a linked list containing ten nodes", () => {
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

    const sortedList = sortList(l.head);
    expect(sortedList.value).toBe(1);
    expect(sortedList.next.value).toBe(2);
    expect(sortedList.next.next.value).toBe(3);
    expect(sortedList.next.next.next.value).toBe(4);
    expect(sortedList.next.next.next.next.value).toBe(5);
    expect(sortedList.next.next.next.next.next.value).toBe(6);
    expect(sortedList.next.next.next.next.next.next.value).toBe(7);
    expect(sortedList.next.next.next.next.next.next.next.value).toBe(8);
    expect(sortedList.next.next.next.next.next.next.next.next.value).toBe(9);
    expect(sortedList.next.next.next.next.next.next.next.next.next.value).toBe(
      10
    );
  });
});
