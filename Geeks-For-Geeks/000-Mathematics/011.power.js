// O(n)
const powerN = (x, y) => {
  let res = 1;
  for (leti = 0; i < y; i++) {
    res *= y;
  }
  return res;
};

// Recursive Log(n) solution

const powerR = (x, y) => {
  if (y == 0) {
    return 1;
  }
  let temp = powerR(x, parseInt(y / 2));
  temp = temp * temp;
  if (y % 2 == 0) {
    return temp;
  } else {
    return temp * x;
  }
};

// Iterative Power (Binary Exponentiation)
// Time Complexity - O(log n)
// Space Complexity - O(n)

const power = (x, y) => {
  let res = 1;
  while (y > 0) {
    if (y % 2 != 0) {
      res = res * x;
    }
    x = x * x;
    y = parseInt(y / 2);
  }
  return res;
};

const res = power(2, 5);
console.log(res);
