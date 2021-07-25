module.exports = {
  //param A : array of integers
  //return a array of integers
  sortColors: function (arr) {
    let idx = 0;
    // sort for zero first
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
        idx++;
      }
    }
    // sort for 1
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) {
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
        idx++;
      }
    }
    return arr;
  },
};
