const { PriorityQueue } = require("./Linked_lists_07");

const findKthLargest = (arr, k) => {
  const q = new PriorityQueue();
  let size = 0;
  for (let ele of arr) {
    q.insert(ele, ele);
    size++;
    if (size > k) {
      q.poll();
      size--;
    }
  }
  return q.poll().value;
};

module.exports = {
  findKthLargest,
};
