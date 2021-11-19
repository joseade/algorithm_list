const getKthFromTheEnd = (list, k) => {
  if (list.isEmpty() || k < 1) return false;
  let start = list.head;
  let end = start;
  for (let i = 0; i < k - 1; i++) {
    end = end.next;
    if (!end) return false;
  }
  while (end.next) {
    start = start.next;
    end = end.next;
  }
  return start;
};

module.exports = {
  getKthFromTheEnd,
};
