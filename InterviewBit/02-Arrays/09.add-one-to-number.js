module.exports = {
  //param A : array of integers
  //return a array of integers
  plusOne: function (arr) {
    let carry = 1;
    const n = arr.length;
    for (let i = n - 1; i >= 0; i--) {
      const sum = carry + arr[i];
      if (sum > 9) {
        arr[i] = sum % 10;
        carry = 1;
      } else {
        arr[i] = sum;
        carry = 0;
      }
    }
    if (carry !== 0) {
      return [1, ...arr];
    }
    while (arr[0] === 0) {
      arr = arr.slice(1);
    }
    return arr;
  },
};
