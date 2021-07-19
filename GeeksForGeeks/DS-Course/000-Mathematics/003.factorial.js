const fact = function (n) {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans *= i;
  }
  return ans;
};

// console.log(fact(10));

const factRec = (n) => {
  if (n == 0) {
    return 1;
  }
  return n * factRec(n - 1);
};

console.log(fact(7));
