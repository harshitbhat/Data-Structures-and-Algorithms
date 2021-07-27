// function solve(x, n, d, dp) {
//   if (n < 0) {
//     return solve(x, n + d, d, dp);
//   }
//   if (dp[n]) {
//     return dp[n];
//   }
//   const a = Math.floor(n / 2);
//   const b = Math.ceil(n / 2);

//   if (dp[a] && dp[b]) {
//     dp[n] =
//       (((dp[a] % d) + (dp[a] % d < 0 ? d : 0)) *
//         ((dp[b] % d) + (dp[b] % d < 0 ? d : 0))) %
//       d;
//   } else if (dp[a]) {
//     dp[n] =
//       (((dp[a] % d) + (dp[a] % d < 0 ? d : 0)) * (solve(x, b, d, dp) % d)) % d;
//   } else if (dp[b]) {
//     dp[n] =
//       ((solve(x, a, d, dp) % d) * ((dp[b] % d) + (dp[b] % d < 0 ? d : 0))) % d;
//   } else {
//     dp[n] = ((solve(x, a, d, dp) % d) * (solve(x, b, d, dp) % d)) % d;
//   }
//   return dp[n];
// }

// module.exports = {
//   //param x : integer
//   //param n : integer
//   //param d : integer
//   //return an integer
//   pow: function (x, n, d) {
//     if (x === 0) return 0;
//     const dp = new Array(n + 1).fill(null);
//     dp[0] = 1;
//     dp[1] = (x % d) + (x % d < 0 ? d : 0);
//     return solve(x, n, d, dp);
//   },
// };

const power = (x, n, d) => {
  if (x === 0 || x === 1) return x;
  if (n === 0) return 1;
  if (n === 1) return x;
  if (n === 2) return (x * x) % d;
  let mid = Math.floor(n / 2);
  if (n % 2 == 0) {
    let ans = power(x, mid, d);
    return (ans * ans) % d;
  } else {
    let ans = power(x, mid, d);
    ans = (ans * ans) % d;
    ans = (ans * x) % d;
    return ans;
  }
};

module.exports = {
  //param x : integer
  //param n : integer
  //param d : integer
  //return an integer
  pow: function (x, n, d) {
    const ans = power(x, n, d);
    return ans < 0 ? ans + d : ans % d;
  },
};

// Editorial Solution

module.exports = {
  //param A : integer
  //param B : integer
  //param C : integer
  //return an integer
  pow: function (A, B, C) {
    if (B == 0) return 1 % C;
    (ans = BigInt(1)), (base = BigInt(A));
    c = BigInt(C);
    if (base < 0) base += c;
    base %= c;
    while (B > 0) {
      if (B % 2 == 1) {
        ans = (ans * base) % c;
        B--;
      } else {
        base = (base * base) % c;
        B /= 2;
      }
    }
    if (ans < 0) ans = (ans + c) % c;
    ret = parseInt(ans);
    return ret;
  },
};
