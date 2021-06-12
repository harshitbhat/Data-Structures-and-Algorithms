//Naive SOlution will not work, as factorial of large numebrs is not possible, will be converted to double in JS
//count number of factors of powers of 5, till it is less than n
// Time Complexity: O(log n)

const countZeroes = (n) => {
  let ans = 0;
  let i = 5;
  while (i <= n) {
    ans += parseInt(n / i);
    i *= 5;
  }
};
