module.exports = {
  //param A : array of array of integers
  //return a array of integers
  solve: function (mat) {
    const arr = [];
    for (const row of mat) {
      arr.push(...row);
    }
    arr.sort((a, b) => a - b);
    return arr;
  },
};
