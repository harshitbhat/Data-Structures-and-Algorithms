/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
};

// Better
var reverseWords = function (s) {
  let res = '';
  let word = '';
  for (const ch of s) {
    if (ch === ' ') {
      res += word + ch;
      word = '';
    } else {
      word = ch + word;
    }
  }
  return res + word;
};
