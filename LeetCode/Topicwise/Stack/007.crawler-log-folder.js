/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  const stk = [];
  for (const op of logs) {
    if (op === '../') {
      if (stk.length > 0) stk.pop();
    } else if (op === './') {
      continue;
    } else {
      stk.push(op);
    }
  }
  return stk.length;
};
