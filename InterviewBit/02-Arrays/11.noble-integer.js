module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (arr) {
    arr.sort((a, b) => b - a);

    const modified = [];
    modified.push([arr[0], 0]);

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
        modified.push([arr[i], modified[i - 1][1] + 1]);
      } else {
        modified.push([arr[i], 0]);
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (i - modified[i][1] === modified[i][0]) {
        return 1;
      }
    }

    return -1;
  },
};
