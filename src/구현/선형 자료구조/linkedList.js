class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertBegin(val) {
    this.head = new Node(val, this.head);
    this.length += 1;
  }

  insertEnd(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
    } else {
      let cur = this.head;

      while (cur.next) {
        cur = cur.next;
      }

      cur.next = node;
    }
    this.length += 1;
  }

  insertAt(val, idx) {
    if (idx < 0 || idx >= this.length) {
      return;
    }
    if (idx === 0) {
      this.head = new Node(val, this.head);
      this.length += 1;
      return;
    }
    const node = new Node(val);
    let cur, pre;

    cur = this.head;
    let count = 0;

    while (count < idx) {
      pre = cur;
      cur = cur.next;
      count += 1;
    }

    node.next = cur;
    pre.next = node;

    this.length += 1;
  }

  getAt(idx) {
    let cur = this.head;
    let count = 0;

    while (cur) {
      if (count === idx) {
        console.log(cur.val);
      }
      count += 1;
      cur = cur.next;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) {
      return;
    }
    let cur = this.head;
    let pre;
    let count = 0;

    if (index === 0) {
      this.head = cur.next;
    } else {
      while (count < index) {
        count += 1;
        pre = cur;
        cur = cur.next;
      }
      pre.next = cur.next;
    }
    this.length -= 1;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  logAll() {
    let cur = this.head;

    while (cur) {
      console.log(cur.val);
      cur = cur.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.insertEnd(100);
linkedList.insertEnd(200);
linkedList.insertEnd(300);
linkedList.insertBegin(900);
linkedList.insertBegin(800);
linkedList.insertAt(99, 2);
linkedList.removeAt(1);
linkedList.getAt(0);
linkedList.logAll();
linkedList.clear();

console.log(linkedList);
