module.exports = {
  //param A : array of integers
  //return an integer
  maxp3: function (arr) {
    arr.sort((a, b) => a - b);
    const n = arr.length;
    console.log(arr);
    return Math.max(
      arr[0] * arr[1] * arr[n - 1],
      arr[n - 1] * arr[n - 2] * arr[n - 3]
    );
  },
};
