function isPalindrome(str) {
  let st = 0;
  let en = str.length - 1;
  while (st <= en) {
    if (str[st] !== str[en]) {
      return false;
    }
    st++;
    en--;
  }
  return true;
}

console.log(isPalindrome('abcdcba'));
console.log(isPalindrome('aba'));
console.log(isPalindrome('geeks'));
console.log(isPalindrome('कडक'));
