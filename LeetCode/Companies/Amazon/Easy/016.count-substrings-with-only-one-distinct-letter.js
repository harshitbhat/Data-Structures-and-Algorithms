/**
 * @param {string} s
 * @return {number}
 */
var countLetters = function (s) {
  let ans = 0;
  let prevSame = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      ans += Math.floor((prevSame * (prevSame + 1)) / 2);
      prevSame = 1;
    } else {
      prevSame++;
    }
  }
  if (s[s.length - 1] === s[s.length - 2]) {
    ans += Math.floor((prevSame * (prevSame + 1)) / 2);
  } else {
    ans += 1;
  }
  return ans;
};
