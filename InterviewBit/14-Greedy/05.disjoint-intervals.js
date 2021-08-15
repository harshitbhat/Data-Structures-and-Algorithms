module.exports = {
  //param A : array of array of integers
  //return an integer
  // by @harshitbhat
  solve: function (arr) {
    arr.sort((a, b) => a[1] - b[1]);
    let ans = 1;
    let r1 = arr[0][1];

    for (let i = 1; i < arr.length; i++) {
      const l1 = arr[i][0];
      const r2 = arr[i][1];

      if (l1 > r1) {
        ans++;
        r1 = r2;
      }
    }

    return ans;
  },
};
