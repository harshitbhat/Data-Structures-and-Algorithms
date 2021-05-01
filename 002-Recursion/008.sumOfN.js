function sumOfN(n) {
  if (n == 0) {
    return 0;
  }
  return n + sumOfN(n - 1);
}

const ans = sumOfN(20);
console.log(ans);
