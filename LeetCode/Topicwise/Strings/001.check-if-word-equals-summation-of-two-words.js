/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */

const alphabets = 'abcdefghijklmnopqrstuvwxyz';

const sumWords = (word) => {
  let count = '';
  for (const ch of word) {
    count += alphabets.indexOf(ch);
  }
  return count;
};

var isSumEqual = function (firstWord, secondWord, targetWord) {
  return (
    parseInt(sumWords(firstWord)) + parseInt(sumWords(secondWord)) ===
    parseInt(sumWords(targetWord))
  );
};
