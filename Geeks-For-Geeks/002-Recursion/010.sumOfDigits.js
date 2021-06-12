function sumOfDigits(n) {
  if (n === 0) {
    return 0;
  }
  return (n % 10) + sumOfDigits(parseInt(n / 10));
}

console.log(sumOfDigits(9));
