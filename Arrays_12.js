class CircularQueue {
  constructor(k) {
    this.q = new Array(k);
    this.front = -1;
    this.rear = -1;
    this.size = k;
  }
  enQueue(value) {
    if (this.isFull()) return false;
    if (this.front === -1) {
      this.front = 0;
      this.rear = 0;
      this.q[this.rear] = value;
    } else {
      this.rear = (this.rear + 1) % this.size;
      this.q[this.rear] = value;
    }
    return true;
  }
  deQueue() {
    if (this.isEmpty()) return false;
    if (this.front === this.rear) {
      this.q[this.front] = undefined;
      this.front = -1;
      this.rear = -1;
    } else {
      this.q[this.front] = undefined;
      this.front = (this.front + 1) % this.size;
    }
    return true;
  }
  Front() {
    if (this.isEmpty()) return -1;
    return this.q[this.front];
  }

  Rear() {
    if (this.isEmpty()) return -1;
    return this.q[this.rear];
  }

  isEmpty() {
    if (this.front === -1) return true;
    return false;
  }
  isFull() {
    if ((this.rear + 1) % this.size === this.front) return true;
    return false;
  }
}

module.exports = { CircularQueue };
