const divide = (head) => {
  let fast = head.next;
  let slow = head;
  while (fast) {
    fast = fast.next;
    if (fast) {
      slow = slow.next;
      fast = fast.next;
    }
  }
  let temp = slow.next;
  slow.next = null;
  return temp;
};
const merge = (list1, list2) => {
  if (!list1) return list2;
  if (!list2) return list1;
  let ans;
  if (list1.value <= list2.value) {
    ans = list1;
    ans.next = merge(list1.next, list2);
  } else {
    ans = list2;
    ans.next = merge(list1, list2.next);
  }
  return ans;
};
const sortList = (head) => {
  if (!head || !head.next) return head;
  let mid = divide(head);
  let left = sortList(head);
  let right = sortList(mid);
  return merge(left, right);
};

module.exports = {
  sortList,
};
