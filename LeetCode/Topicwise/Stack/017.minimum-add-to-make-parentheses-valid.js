/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  const stk = [];
  for (const ch of s) {
    const top = stk.length - 1;
    if (ch === '(') {
      stk.push(ch);
    } else {
      if (top === -1) {
        stk.push(ch);
      } else {
        if (stk[top] === '(') {
          stk.pop();
        } else {
          stk.push(ch);
        }
      }
    }
  }
  return stk.length;
};

// Better

var minAddToMakeValid = function (s) {
  let open = 0;
  let close = 0;
  for (const ch of s) {
    if (ch === '(') {
      open++;
    } else if (open > 0) {
      open--;
    } else {
      close++;
    }
  }
  return open + close;
};
