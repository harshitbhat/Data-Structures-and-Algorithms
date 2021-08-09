module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  removeElement: function (arr, k) {
    let one = 0;
    for (let two = 0; two < arr.length; two++) {
      if (arr[two] !== k) {
        [arr[one], arr[two]] = [arr[two], arr[one]];
        one++;
      }
    }
    arr = arr.slice(one);
    return arr.length;
  },
};
