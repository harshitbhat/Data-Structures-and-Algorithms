const countDigits = function (n) {
  let temp = n;
  let digits = 0;
  while (temp) {
    temp = parseInt(temp / 10);
    digits++;
  }
  return digits;
};

console.log(countDigits(456));
