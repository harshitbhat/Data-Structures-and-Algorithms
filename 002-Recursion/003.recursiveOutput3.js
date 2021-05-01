// Function is generationg Power of 2 <= n => gives index

function fun(n) {
  if (n == 1) {
    return 0;
  }
  return 1 + fun(parseInt(n / 2));
}

const val = fun(16);
console.log(val);
