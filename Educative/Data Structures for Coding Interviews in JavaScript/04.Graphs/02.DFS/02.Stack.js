'use strict';

module.exports = class Stack {
  constructor(mySize) {
    this.items = [];
    this.size = mySize;
    this.top = -1;
  }

  getTop() {
    return this.top;
  }

  isEmpty() {
    return this.items.length == 0;
  }

  isFull() {
    return this.items.length >= this.size;
  }

  push(element) {
    this.items.push(element);
    this.top = element;
  }

  pop() {
    if (this.items.length != 0) {
      if (this.items.length == 1) {
        this.top = -1;
        return this.items.pop();
      } else {
        this.top = this.items[this.items.length - 2];
        return this.items.pop();
      }
    }
  }
};
