//piece of data - val
//referenct to next node - next
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //adding node to end of the list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //removing node from end of list
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return current;
  }
  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    let node = new Node(val);
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(node);
    } else if (index === this.length) {
      this.push(node);
    } else {
      let previous = this.get(index - 1);
      node.next = previous.next;
      previous.next = node;
      this.length++;
    }
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let previous = this.get(index - 1);
    let removed = previous.next;
    previous.next = removed.next;
    this.length--;
    return removed;
  }
  //reverse in place
  reverse() {
    let current = this.head;
    //swap head and tail
    this.head = this.tail;
    this.tail = current;
    let previous = null;
    let next;

    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    return this;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

var list = new SinglyLinkedList();

list.push("head");
list.push("middle1");
list.push("middle2");
list.push("middle3");
list.push("middle4");
list.push("middle5");
list.push("middle6");
list.push("tail");
console.log(list);
