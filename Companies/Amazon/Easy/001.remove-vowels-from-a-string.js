/**
 * @param {string} s
 * @return {string}
 */
var isVowel = (ch) => {
  if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
    return true;
  } else {
    return false;
  }
};
var removeVowels = function (s) {
  return s
    .split('')
    .map((el) => (isVowel(el) ? '' : el))
    .join('');
};
