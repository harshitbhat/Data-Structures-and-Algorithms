module.exports = {
  //param A : array of integers
  //return an integer
  perfectPeak: function (arr) {
    const n = arr.length;

    const left = new Array(n).fill(false);
    const right = new Array(n).fill(false);

    let maxTillNow = arr[0];
    for (let i = 1; i < n; i++) {
      if (arr[i] > maxTillNow) {
        maxTillNow = arr[i];
        left[i] = true;
      }
    }

    let minTillNow = arr[n - 1];
    for (let i = n - 1; i >= 0; i--) {
      if (arr[i] < minTillNow) {
        minTillNow = arr[i];
        right[i] = true;
      }
    }

    for (let i = 0; i < n; i++) {
      if (left[i] && right[i]) {
        return 1;
      }
    }

    return 0;
  },
};
