module.exports = {
  /**
   * Interval: [start, end]
   *
   * param A: intervals, a list of Intervals
   * return :a list of Intervals
   */
  merge: function (A) {
    const ans = [];

    A.sort((a, b) => a[0] - b[0]);
    ans.push(A[0]);

    for (let i = 1; i < A.length; i++) {
      const low = A[i][0];
      const high = A[i][1];

      const prevLow = ans[ans.length - 1][0];
      const prevHigh = ans[ans.length - 1][1];

      if (Math.max(low, prevLow) > Math.min(high, prevHigh)) {
        ans.push([low, high]);
      } else {
        ans[ans.length - 1][0] = Math.min(low, prevLow);
        ans[ans.length - 1][1] = Math.max(high, prevHigh);
      }
    }

    return ans;
  },
};
