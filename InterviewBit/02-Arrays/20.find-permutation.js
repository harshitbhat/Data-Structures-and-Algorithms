var assert = require('assert');

module.exports = {
  /**
   * @param A: string
   * @param B: integer
   * @return a list of integers
   */
  findPerm: function (n, str) {
    const ans = new Array(n).fill(null);

    const check = new Array(n).fill(0);
    check[0] = 1;
    for (let i = 1; i < n; i++) {
      if (str[i - 1] === 'D') {
        check[i] = check[i - 1] - 1;
      } else {
        check[i] = check[i - 1] + 1;
      }
    }
    let smallest = Math.min(...check);
    let smallestIdx = check.indexOf(smallest);
    let largest = Math.max(...check);

    let k = 1;
    while (smallest <= largest) {
      ans[smallestIdx] = k++;
      for (let i = 0; i < n; i++) {
        if (i !== smallestIdx && check[i] === smallest) {
          ans[i] = k++;
        }
      }
      smallest = smallest + 1;
      smallestIdx = check.indexOf(smallest);
    }
    return ans;
  },
};

function solve(n, str) {
  const ans = new Array(n).fill(null);

  const check = new Array(n).fill(0);
  check[0] = 1;
  for (let i = 1; i < n; i++) {
    if (str[i - 1] === 'D') {
      check[i] = check[i - 1] - 1;
    } else {
      check[i] = check[i - 1] + 1;
    }
  }
  let smallest = Math.min(...check);
  let smallestIdx = check.indexOf(smallest);
  let largest = Math.max(...check);

  let k = 1;
  while (smallest <= largest) {
    ans[smallestIdx] = k++;
    for (let i = 0; i < n; i++) {
      if (i !== smallestIdx && check[i] === smallest) {
        ans[i] = k++;
      }
    }
    smallest = smallest + 1;
    smallestIdx = check.indexOf(smallest);
  }
  return ans;
}

solve(4, 'IDD');

/* -------------------------------------------------------------------------- */
/*                                  Editorial                                 */
/* -------------------------------------------------------------------------- */

function solve2(str, n) {
  let min = 1;
  let max = n;

  let ans = [];
  for (let i = 0; i < n; i++) {
    if (str.charAt(i) === 'D') {
      ans[i] = max--;
    } else if (str.charAt(i) === 'I') {
      ans[i] = min++;
    } else {
      ans[i] = min;
    }
  }
  console.log(ans);
  return ans;
}

solve2('DID', 4);
