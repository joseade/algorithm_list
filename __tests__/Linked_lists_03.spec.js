const { getKthFromTheEnd } = require("../Linked_lists_03");
const { LinkedList } = require("../Linked_list");

describe("Find the k-th to last node of a singly linked list", () => {
  it("Should find the k-th to last node of a linked list containing six nodes", () => {
    const l = new LinkedList();
    l.addFirst(4);
    l.addFirst(3);
    l.addFirst(2);
    l.addFirst(1);
    l.addFirst(0);
    l.addFirst(-1);
    let k = 1;
    expect(getKthFromTheEnd(l, k).value).toBe(4);
    k = 2;
    expect(getKthFromTheEnd(l, k).value).toBe(3);
    k = 3;
    expect(getKthFromTheEnd(l, k).value).toBe(2);
    k = 4;
    expect(getKthFromTheEnd(l, k).value).toBe(1);
    k = 5;
    expect(getKthFromTheEnd(l, k).value).toBe(0);
    k = 6;
    expect(getKthFromTheEnd(l, k).value).toBe(-1);
    k = 7;
    expect(getKthFromTheEnd(l, k).value).toBeFalsy();
    k = 8;
    expect(getKthFromTheEnd(l, k).value).toBeFalsy();
    k = 0;
    expect(getKthFromTheEnd(l, k).value).toBeFalsy();
  });
});
