/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stk = [];
  for (const ch of s) {
    if (stk.length === 0) {
      stk.push(ch);
    } else {
      if (ch === stk[stk.length - 1]) {
        stk.pop();
      } else {
        stk.push(ch);
      }
    }
  }
  return stk.join('');
};
