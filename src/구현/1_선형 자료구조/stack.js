class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items.length === 0) {
      return "underflow";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  logAll() {
    console.log(this.items.reduce((acc, cur) => acc + " " + cur));
  }
}

const stack = new Stack();

console.log(stack.isEmpty());
console.log(stack.pop());
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
stack.push(4);
stack.push(5);
stack.push(6);
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.isEmpty());

stack.logAll();
