'use strict';
const Stack = require('./Stack.js');

function nextGreaterElement(arr) {
  const result = new Array(arr.length).fill(-1);
  const stk = new Stack();

  for (let i = arr.length - 1; i >= 0; i--) {
    let next = arr[i];

    if (!stk.isEmpty()) {
      let top = stk.getTop();
      while (top <= next) {
        if (stk.isEmpty()) {
          break;
        }
        stk.pop();
        top = stk.getTop();
      }
    }

    if (!stk.isEmpty()) {
      result[i] = stk.getTop();
    } else {
      result[i] = -1;
    }

    stk.push(next);
  }

  return result;
}
