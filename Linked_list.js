class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  addFirst(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = node;
      this.size++;
    } else {
      node.next = this.head;
      this.head = node;
      this.size++;
    }
  }
  addLast(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = node;
      this.size++;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.size++;
    }
  }
  indexOf(value) {
    let index = 0;
    let node = this.head;
    while (node) {
      if (node.value === value) return index;
      node = node.next;
      index++;
    }
    return -1;
  }
  contains(value) {
    return this.indexOf(value) !== -1;
  }
  isEmpty() {
    return this.tail === null;
  }
  removeFirst() {
    if (this.isEmpty()) return false;
    if (this.head === this.tail) {
      this.head = this.tail = null;
      this.size--;
      return;
    }
    const second = this.head.next;
    this.head.next = null;
    this.head = second;
    this.size--;
  }
  removeLast() {
    if (this.isEmpty()) return false;
    if (this.head === this.tail) {
      this.head = this.tail = null;
      this.size--;
      return;
    }
    let node = this.head;
    while (node.next.next) {
      node = node.next;
    }
    this.tail = node;
    this.tail.next = null;
    this.size--;
  }
  getSize() {
    return this.size;
  }
  toArray() {
    let q = [];
    let node = this.head;
    while (node) {
      q.push(node.value);
      node = node.next;
    }
    return q;
  }
}

module.exports = {
  LinkedList,
};
