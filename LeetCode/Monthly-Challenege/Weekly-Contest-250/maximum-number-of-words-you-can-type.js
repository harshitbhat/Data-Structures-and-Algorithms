/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  const words = text.split(' ');
  let ans = 0;
  for (const word of words) {
    for (const ch of brokenLetters) {
      if (word.indexOf(ch) !== -1) {
        ans++;
        break;
      }
    }
  }
  return words.length - ans;
};
