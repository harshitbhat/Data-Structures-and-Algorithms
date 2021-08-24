module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let ans = 0;
    let countZero = 0;
    let first = 0;

    for (let second = 0; second < A.length; second++) {
      if (A[second] === 0) countZero++;

      while (countZero > B) {
        if (A[first] === 0) countZero--;
        first++;
      }

      ans = Math.max(ans, second - first + 1);
    }

    return ans;
  },
};
