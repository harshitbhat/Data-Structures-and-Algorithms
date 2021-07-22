// let combinationUtil = (count, arr, n, num, k, ans) => {
//   if (k === count) {
//     ans.push(num);
//     return;
//   }
//   for (let i = 0; i < n; i++) {
//     combinationUtil(count + 1, arr, n, num + arr[i], k, ans);
//   }
// };

// let printCombinations = (arr, k) => {
//   const n = arr.length;
//   const ans = [];
//   combinationUtil(0, arr, n, '', k, ans);
//   return ans;
// };

// const isValidBDigits = (num, b) => {
//   return (num + '').length === b;
// };

// function solution(combinations, b, c) {
//   let mySet = new Set();
//   for (const possibility of combinations) {
//     const num = parseInt(possibility);
//     if (isValidBDigits(num, b) && num < c) {
//       mySet.add(num);
//     }
//   }
//   return mySet.size;
// }

// // function solve(a, b, c) {
// //   const combinations = printCombinations(a, Math.min(b, (c + '').length));
// //   return solution(combinations, b, c);
// // }

// // const a = [0, 1, 2, 3, 4, 5, 7, 8, 9];
// // const b = 9;
// // const c = 51822;

// // ans = solve(a, b, c);
// // console.log(ans);

// module.exports = {
//   //param A : array of integers
//   //param B : integer
//   //param C : integer
//   //return an integer
//   solve: function (A, B, C) {
//     const combinations = printCombinations(A, Math.min(B, (C + '').length));
//     return solution(combinations, B, C);
//   },
// };

// TLE with my solution

// Better solution to look further

module.exports = {
  //param A : array of integers
  //param B : integer
  //param C : integer
  //return an integer
  solve: function (A, B, C) {
    if (A.length === 0) return 0;
    if (C / Math.pow(10, B - 1) < 1) return 0;

    var count = 0,
      c,
      cn,
      d = C;
    for (var i = B - 1; i >= 0; i--) {
      c = parseInt(d / Math.pow(10, i));

      cn = A.filter(function (a) {
        if (i == B - 1 && B > 1) {
          return a > 0 && a < c;
        } else {
          return a < c;
        }
      });
      // console.log(c, d, cn);
      count += cn.length * Math.pow(A.length, i);
      // console.log(count);
      if (A.indexOf(c) < 0) {
        break;
      }
      d = d % Math.pow(10, i);
    }
    return count;
  },
};

// other

module.exports = {
  getDigits: function (n) {
    var arr = [];
    while (n) {
      arr.push(n % 10);
      n = Math.floor(n / 10);
    }
    return arr;
  },
  calculate: function (A, B, C, digits, sum) {
    if (B > digits.length) {
      return 0;
    }

    if (B < digits.length) {
      return A[0] === 0 && B > 1
        ? (A.length - 1) * Math.pow(A.length, B - 1)
        : Math.pow(A.length, B);
    }

    for (var i = 0; i < B; i++) {
      var count = 0;
      for (
        var j = 0;
        A[j] < digits[digits.length - 1 - i] && j < A.length;
        j++
      ) {
        if (i === 0 && A[j] === 0 && B > 1) {
          continue;
        }
        count++;
      }

      sum = sum + count * Math.pow(A.length, B - i - 1);
      if (j === A.length || A[j] !== digits[digits.length - 1 - i]) {
        break;
      }
    }

    return sum;
  },
  solve: function (A, B, C) {
    var digits = this.getDigits(C);
    return this.calculate(A, B, C, digits, 0);
  },
};
