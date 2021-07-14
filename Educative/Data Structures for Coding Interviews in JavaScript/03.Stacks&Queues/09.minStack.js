'use strict';
const Stack = require('./Stack.js');
class minStack {
  constructor() {
    this.mainStack = [];
    this.minStack = [];
  }

  pop() {
    const popped = this.mainStack.pop();
    if (popped === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return popped;
  }

  push(value) {
    this.mainStack.push(value);
    if (this.minStack.length === 0) {
      this.minStack.push(value);
    } else {
      if (value < this.minStack[this.minStack.length - 1]) {
        this.minStack.push(value);
      }
    }
  }

  min() {
    return this.minStack[this.minStack.length - 1];
  }
}
