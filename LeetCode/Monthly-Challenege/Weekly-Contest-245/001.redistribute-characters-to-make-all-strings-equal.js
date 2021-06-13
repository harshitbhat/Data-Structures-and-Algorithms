/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
  const hash = {};
  for (const word of words) {
    for (const ch of word) {
      if (hash[ch]) hash[ch]++;
      else hash[ch] = 1;
    }
  }
  for (const ch in hash) {
    if (hash[ch] % words.length !== 0) {
      return false;
    }
  }
  return true;
};
