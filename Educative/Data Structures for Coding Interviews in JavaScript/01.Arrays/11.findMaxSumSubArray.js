let findMaxSumSubArray = function (arr) {
  let ans = arr[0];
  let prev = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] + prev > arr[i]) {
      prev += arr[i];
    } else {
      prev = arr[i];
    }
    ans = Math.max(ans, prev);
  }
  return ans;
};
