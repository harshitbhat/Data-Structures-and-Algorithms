'use strict';
const Stack = require('./Stack.js');
function evaluatePostfix(exp) {
  const stk = new Stack();

  for (let i = 0; i < exp.length; i++) {
    const ch = exp[i];
    if (ch === '+' || ch === '-' || ch === '*' || ch === '/') {
      const b = parseInt(stk.pop());
      const a = parseInt(stk.pop());
      let res;
      switch (ch) {
        case '+':
          res = a + b;
          break;
        case '-':
          res = a - b;
          break;
        case '*':
          res = a * b;
          break;
        case '/':
          res = a / b;
          break;
      }
      stk.push(res);
    } else {
      stk.push(ch);
    }
  }

  return stk.pop();
}
