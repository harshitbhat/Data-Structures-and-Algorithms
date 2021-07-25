module.exports = {
  //param A : string
  //return an integer
  solve: function (str) {
    const stack = [];
    for (const ch of str) {
      if (ch === '(') {
        stack.push(ch);
      } else {
        if (stack.length > 0) {
          if (stack[stack.length - 1] === '(') {
            stack.pop();
          } else {
            stack.push(ch);
          }
        } else {
          stack.push(ch);
        }
      }
    }
    return stack.length;
  },
};
