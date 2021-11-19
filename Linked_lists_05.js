const findMiddleNode = (list) => {
  let slow = list.head;
  let fast = slow;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const reverse = (head) => {
  let node = head;
  let prev = null;
  while (node) {
    let post = node.next;
    node.next = prev;
    [prev, node] = [node, post];
  }
  return prev;
};

const compare = (list1, list2) => {
  while (list1 && list2) {
    if (list1.value !== list2.value) return false;
    list1 = list1.next;
    list2 = list2.next;
  }
  return true;
};

const isPalindrome = (list) => {
  const middleNode = findMiddleNode(list);
  const tail = reverse(middleNode);
  return compare(list.head, tail);
};

module.exports = {
  isPalindrome,
};
