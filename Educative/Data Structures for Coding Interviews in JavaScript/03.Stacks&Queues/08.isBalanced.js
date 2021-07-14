'use strict';
const Stack = require('./Stack.js');
function isBalanced(exp) {
  const stk = new Stack();

  for (let i = 0; i < exp.length; i++) {
    const ch = exp[i];
    if (ch === '(' || ch === '[' || ch === '{') {
      stk.push(ch);
    } else {
      if (ch === ')' && stk.getTop() === '(') {
        stk.pop();
      }
      switch (ch) {
        case ')':
          if (stk.getTop() === '(') {
            stk.pop();
          }
          break;
        case ']':
          if (stk.getTop() === '[') {
            stk.pop();
          }
          break;
        case '}':
          if (stk.getTop() === '{') {
            stk.pop();
          }
          break;
      }
    }
  }

  return stk.size() === 0;
}
