const max_sub_array_of_size_k = function (k, arr) {
  let ans = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      ans = Math.max(ans, sum);
      sum -= arr[i - k + 1];
    }
  }
  return ans;
};
