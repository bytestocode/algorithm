class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return -1;
    }
    const item = this.front();
    this.items.splice(0, 1);
    return item;
  }

  front() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  logAll() {
    console.log(this.items.reduce((acc, cur) => acc + " " + cur));
  }
}

const queue = new Queue();

console.log(queue.isEmpty()); // true
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue()); // 10
console.log(queue.front()); // 20
console.log(queue.isEmpty()); // false

queue.logAll(); // 20 30
