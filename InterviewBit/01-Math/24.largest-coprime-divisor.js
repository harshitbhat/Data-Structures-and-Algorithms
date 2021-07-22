const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const getallFactors = (n) => {
  const ans = [];
  let i = 1;
  while (i * i <= n) {
    if (n % i === 0) {
      ans.push(i);
      if (i * i !== n) {
        ans.push(n / i);
      }
    }
    i++;
  }
  ans.sort((a, b) => b - a);
  return ans;
};

module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  cpFact: function (A, B) {
    if (gcd(A, B) === 1) return A;
    const factors = getallFactors(A);
    let ans = 1;
    for (const el of factors) {
      if (gcd(el, B) === 1) {
        ans = el;
        break;
      }
    }
    return ans;
  },
};

function solve(A, B) {
  if (gcd(A, B) === 1) return A;
  const factors = getallFactors(A);
  let ans = 1;
  for (const el of factors) {
    if (gcd(el, B) === 1) {
      ans = el;
      break;
    }
  }
  return ans;
}

const ans = solve(422717554, 561865948);
console.log(ans);
