const detectCycle = function (list) {
  let slow = list.head;
  let fast = slow;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      let i = fast;
      let j = list.head;
      while (i !== j) {
        i = i.next;
        j = j.next;
      }
      return i;
    }
  }
  return false;
};

module.exports = {
  detectCycle,
};
