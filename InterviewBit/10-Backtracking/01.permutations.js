const solve = (a, i, n, ans) => {
  if (i === n) {
    ans.push([...a]);
    return;
  } else {
    for (let j = i; j < n; j++) {
      [a[i], a[j]] = [a[j], a[i]];
      solve(a, i + 1, n, ans);
      [a[i], a[j]] = [a[j], a[i]];
    }
  }
};

module.exports = {
  //param A : array of integers
  //return a array of array of integers
  permute: function (A) {
    const ans = [];
    solve(A, 0, A.length - 1, ans);
    return ans;
  },
};

/*

TestCase - Correctness  Failed
Your submission failed for the following input
A : [ 3, 2, 1 ]

The expected return value: 
[1 2 3 ] [1 3 2 ] [2 1 3 ] [2 3 1 ] [3 1 2 ] [3 2 1 ] 
Your function returned the following: 

Final Verdict
> Wrong Answer

*/
