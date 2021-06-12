/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
  const sum = chalk.reduce((sum, el) => sum + el, 0);
  if (k % sum === 0) {
    return 0;
  }
  if (k > sum) {
    k = k % sum;
  }
  for (let i = 0; i < chalk.length; i++) {
    if (k < chalk[i]) {
      return i;
    } else {
      k -= chalk[i];
    }
  }
};
