const MOD = 10 ** 9 + 7;
const dp = {};

dp[1] = [
  [1, 1],
  [1, 0],
];

dp[2] = [
  [2, 1],
  [1, 1],
];

// Approach right, problem in modulo function
const multiply = (mat1, mat2) => {
  const ans = [];

  for (let i = 0; i < 2; i++) {
    const row = [];
    for (let j = 0; j < 2; j++) {
      let prod = 0;
      for (let k = 0; k < 2; k++) {
        prod += (mat1[i][k] * mat2[k][j]) % MOD;
        prod %= MOD;
      }
      row.push(prod);
    }
    ans.push(row);
  }
  return ans;
};

const fibonacci = (n) => {
  if (dp[n]) {
    return dp[n];
  }

  let a, b;
  a = Math.floor(n / 2);
  b = Math.ceil(n / 2);

  if (dp[a] && dp[b]) {
    dp[n] = multiply(dp[a], dp[b]);
  } else {
    const first = fibonacci(a);
    const second = fibonacci(b);
    dp[n] = multiply(first, second);
  }
  return dp[n];
};

module.exports = {
  solve: function (n) {
    return fibonacci(n - 1)[0][0];
  },
};

/* -------------------------------------------------------------------------- */
/*                             Editorial Solution                             */
/* -------------------------------------------------------------------------- */
/*

module.exports = { 
 //param A : integer
 //return an integer
    solve : function(A){
        return solve2(A)
    }
};



function solve2(N) {
        if(N == 0) return 0;
    if(N == 1) return 1;
    if(N == 2) return 1;
    
    let base =  [[BigInt(1) , BigInt(1)], [BigInt(1), BigInt(0)]]
    let pow = matPow(base, N - 1);
    return Number((pow[0][0]) % BigInt(1000000007));
}


function matPow(A,n) {
    // console.log(A,n)
    if(n == 0) return [[BigInt(1) , BigInt(0)], [BigInt(0), BigInt(1)]];
    
    if(n == 1) return A;
    
    if(n % 2 == 0) {
        const half = matPow(A, n / 2);
        // console.log('half', half)
        return matrixMult(half, half);
    } else {
        const evenPow = matPow(A, n - 1);
        // console.log('evenPow', evenPow)
        return matrixMult(evenPow,A);
    }
}

function matrixMult(A,B) {
    // console.log('mul', A, B)
    let r = A.length;
    let common = B.length;
    let c = B[0].length;
    
    let ans = Array(r).fill(0).map(x => Array(c).fill(BigInt(0)));
    
    for(let i = 0; i < r; i++) {
        for(let j = 0; j < c; j++) {
            for(let x = 0 ; x < common; x++) {
                ans[i][j] += A[i][x] * B[x][j];
                ans[i][j] %= BigInt(1000000007);
            }
            
        }
    }
    // console.log(ans)
    return ans;
}





*/
