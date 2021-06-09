/**
 * @param {string} s
 * @return {string}
 */

var makeGood = function (s) {
  const stk = [];
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    const top = stk.length - 1;
    if (top === -1) {
      stk.push(ch);
    } else {
      if (ch.toLowerCase() === stk[top].toLowerCase()) {
        if (
          (ch.toLowerCase() === ch && stk[top].toUpperCase() === stk[top]) ||
          (ch.toUpperCase() === ch && stk[top].toLowerCase() === stk[top])
        ) {
          stk.pop();
        } else {
          stk.push(ch);
        }
      } else {
        stk.push(ch);
      }
    }
  }
  return stk.join('');
};

makeGood('leEeetcode');
