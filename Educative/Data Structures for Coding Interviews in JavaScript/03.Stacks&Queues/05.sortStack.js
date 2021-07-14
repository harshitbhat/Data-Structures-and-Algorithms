'use strict';
const Stack = require('./Stack.js');

function sortStack(stack) {
  // use a temporary stack
  const tempStack = new Stack();

  while (!stack.isEmpty()) {
    // pop values from main stack
    let value = stack.pop();
    // if value is greater than or equal to top tempStack, put it in top of tempstack
    if (value >= tempStack.getTop()) {
      tempStack.push(value);
    } else {
      while (!tempStack.isEmpty()) {
        stack.push(tempStack.pop());
      }
      tempStack.push(value);
    }
  }
  while (tempStack.isEmpty() == false) {
    stack.push(tempStack.pop());
  }
  return stack;
}
