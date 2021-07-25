module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (arr, B) {
    let low = 0;
    let high = arr.length - 1;
    let ans = 0;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (arr[mid] === B) {
        if (arr[mid + 1] !== B) {
          ans = mid + 1;
          break;
        } else {
          low = mid + 1;
        }
      } else if (arr[mid] < B) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }

      if (arr[low] > B) {
        ans = low;
        break;
      }
      if (arr[high] < B) {
        ans = high + 1;
        break;
      }
    }
    return ans;
  },
};
