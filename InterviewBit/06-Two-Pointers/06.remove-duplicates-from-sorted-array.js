module.exports = {
  //param A : array of integers
  //return an integer
  removeDuplicates: function (arr) {
    let i = 0;
    let j = 1;
    while (i < arr.length && j < arr.length) {
      if (arr[i] === arr[j]) {
        j++;
      } else {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  },
};
