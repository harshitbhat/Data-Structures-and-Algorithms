module.exports = {
  //param A : array of integers
  //return a array of integers
  wave: function (arr) {
    const n = arr.length;
    arr.sort((a, b) => a - b);
    // for (let i = 0; i < n; i += 4) {
    //   if (i + 1 === n) {
    //     break;
    //   } else if (i + 2 === n || i + 3 === n) {
    //     [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    //     break;
    //   } else {
    //     [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    //     [arr[i + 2], arr[i + 3]] = [arr[i + 3], arr[i + 2]];
    //   }
    // }
    // better
    for (let i = 0; i < n - 1; i += 2) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    return arr;
  },
};
