module.exports = {
  //param A : array of integers
  //return an integer
  removeDuplicates: function (arr) {
    let first = 2;
    for (let second = 2; second < arr.length; second++) {
      if (arr[first - 2] !== arr[second]) {
        arr[first] = arr[second];
        first++;
      }
    }
    return first;
  },
};
