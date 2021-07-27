const romansToDecimal = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

module.exports = {
  //param A : string
  //return an integer
  romanToInt: function (A) {
    let ans = 0;
    for (let i = 0; i < A.length; i++) {
      if (romansToDecimal[A.slice(i)]) {
        ans += romansToDecimal[A.slice(i)];
        break;
      } else {
        if (romansToDecimal[A.slice(i, i + 2)]) {
          ans += romansToDecimal[A.slice(i, i + 2)];
          i++;
        } else {
          ans += romansToDecimal[A[i]];
        }
      }
    }
    return ans;
  },
};

function solve(A) {
  let ans = 0;
  for (let i = 0; i < A.length; i++) {
    if (romansToDecimal[A.slice(i)]) {
      console.log(A[i], A.slice(i), romansToDecimal[A.slice(i)]);
      ans += romansToDecimal[A.slice(i)];
      break;
    } else {
      if (romansToDecimal[A.slice(i, i + 2)]) {
        console.log(A[i], A.slice(i, i + 2), romansToDecimal[A[i]]);
        ans += romansToDecimal[A.slice(i, i + 2)];
        i++;
      } else {
        console.log(A[i], romansToDecimal[A[i]]);
        ans += romansToDecimal[A[i]];
      }
    }
  }
  console.log(ans);
  return ans;
}

solve('MMCDLXXV');
