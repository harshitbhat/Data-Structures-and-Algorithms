module.exports = {
  //param A : string
  //return an integer
  solve: function (str) {
    const stack = [];
    for (const ch of str) {
      if (ch === '(') {
        stack.push(ch);
      } else {
        const top = stack.length - 1;
        if (top >= 0) {
          if (stack[top] === '(') {
            stack.pop();
          } else {
            stack.push(ch);
          }
        } else {
          stack.push(ch);
        }
      }
    }
    return stack.length === 0 ? 1 : 0;
  },
};
