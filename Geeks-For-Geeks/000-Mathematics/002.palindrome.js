const isPalindrome = function (n) {
  const num = (n + '').split('');
  return num.join('') === num.reverse().join('');
};

const isPalindrome2 = (n) => {
  return n === parseInt((n + '').split('').reverse().join(''));
};

console.log(isPalindrome2(909));
