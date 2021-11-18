const findMiddleNode = (list) => {
  let slow = list.head;
  let fast = slow;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

module.exports = {
  findMiddleNode,
};
