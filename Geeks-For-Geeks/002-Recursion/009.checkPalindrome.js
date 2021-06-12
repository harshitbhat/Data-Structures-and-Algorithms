function isPalindrome(s, start, end) {
  if (start >= end) {
    return true;
  }
  if (s[start] != s[end]) {
    return false;
  }
  return isPalindrome(s, start + 1, end - 1);
}

const s = 'harshit';
const isP = isPalindrome(s, 0, s.length - 1);
console.log(isP);
