const { isPalindrome } = require("../Linked_lists_05");
const { LinkedList } = require("../Linked_list");

describe("Given a single linked list as input, determine if the contents is a palindrome", () => {
  it("Should compare a linked list containing one node", () => {
    const l = new LinkedList();
    l.addFirst(1);
    expect(isPalindrome(l)).toBeTruthy();
  });
  it("Should compare linked list containing two nodes", () => {
    const l = new LinkedList();
    l.addFirst("a");
    l.addFirst("a");
    expect(isPalindrome(l)).toBeTruthy();

    const l1 = new LinkedList();
    l1.addFirst("b");
    l1.addFirst("a");
    expect(isPalindrome(l1)).toBeFalsy();
  });
  it("Should compare linked list containing three nodes", () => {
    const l = new LinkedList();
    l.addFirst(1);
    l.addFirst(2);
    l.addFirst(1);
    expect(isPalindrome(l)).toBeTruthy();

    const l1 = new LinkedList();
    l1.addFirst("b");
    l1.addFirst("a");
    l1.addFirst("a");
    expect(isPalindrome(l1)).toBeFalsy();
  });
  it("Should compare linked list containing nine nodes", () => {
    const l = new LinkedList();
    l.addFirst("r");
    l.addFirst("e");
    l.addFirst("d");
    l.addFirst("i");
    l.addFirst("v");
    l.addFirst("i");
    l.addFirst("d");
    l.addFirst("e");
    l.addFirst("r");
    expect(isPalindrome(l)).toBeTruthy();

    const l1 = new LinkedList();
    l1.addFirst(1);
    l1.addFirst(2);
    l1.addFirst(3);
    l1.addFirst(4);
    l1.addFirst(5);
    l1.addFirst(0);
    l1.addFirst(3);
    l1.addFirst(2);
    l1.addFirst(1);
    expect(isPalindrome(l1)).toBeFalsy();
  });
});
