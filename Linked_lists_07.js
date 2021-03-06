class Node {
  constructor(value, priority) {
    this.value = value;
    this.next = null;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.first = null;
  }
  insert(value, priority) {
    const node = new Node(value, priority);
    if (!this.first || priority > this.first.priority) {
      node.next = this.first;
      this.first = node;
      return;
    } else {
      let currentNode = this.first;
      while (currentNode.next && priority < currentNode.next.priority) {
        currentNode = currentNode.next;
      }
      node.next = currentNode.next;
      currentNode.next = node;
    }
  }
  remove() {
    const temp = this.first;
    this.first = this.first.next;
    return temp;
  }
  peek() {
    return this.first;
  }
  poll() {
    if (!this.first) return;
    let node = this.first;
    while (node.next && node.next.next) {
      node = node.next;
    }
    let last;
    if (!node.next) {
      last = node;
      this.first = null;
    } else {
      last = node.next;
      node.next = null;
    }
    return last;
  }
}

module.exports = {
  PriorityQueue,
};
