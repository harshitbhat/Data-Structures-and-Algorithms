module.exports = {
  //param A : array of strings
  //return an integer
  evalRPN: function (A) {
    const stack = [];
    for (let i = 0; i < A.length; i++) {
      const ch = A[i];
      if (ch === '+' || ch === '-' || ch === '*' || ch === '/') {
        const second = parseInt(stack.pop());
        const first = parseInt(stack.pop());
        let res;
        if (ch === '+') {
          res = first + second;
        } else if (ch === '-') {
          res = first - second;
        } else if (ch === '*') {
          res = first * second;
        } else {
          res = Math.floor(first / second);
        }
        stack.push(res);
      } else {
        stack.push(ch);
      }
    }
    return parseInt(stack[0]);
  },
};
