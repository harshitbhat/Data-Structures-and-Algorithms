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

const res = powerR(2, 7);

console.log(res);
