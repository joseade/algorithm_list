const reverse = (list) => {
  let node = list.head;
  let prev = null;
  list.tail = node;
  while (node) {
    let post = node.next;
    node.next = prev;
    [prev, node] = [node, post];
    if (node) {
      list.head = node;
    }
  }
};

module.exports = {
  reverse,
};
