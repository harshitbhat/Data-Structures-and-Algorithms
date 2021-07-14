'use strict';
const Stack = require('./Stack.js');
//Create Stack => stack = Stack();
//Push Function => stack.push()
//Pop Function => stack.pop()
//Top Function => stack.getTop()
//Helper Functions => stack.isEmpty() //returns boolean
class newQueue {
  constructor() {
    this.stack = new Stack();
  }

  enqueue(value) {
    this.stack.push(value);
  }

  dequeue() {
    if (this.stack.isEmpty()) {
      return null;
    }
    const temp = new Stack();

    while (!this.stack.isEmpty()) {
      temp.push(this.stack.pop());
    }

    const popped = temp.pop();

    while (!temp.isEmpty()) {
      this.stack.push(temp.pop());
    }

    return popped;
  }
}
