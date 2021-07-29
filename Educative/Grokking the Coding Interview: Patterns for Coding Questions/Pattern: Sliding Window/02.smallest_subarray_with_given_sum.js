const smallest_subarray_with_given_sum = function (s, arr) {
  let ans = Infinity;
  let windowStart = 0;
  let sum = 0;
  for (let windowEnd = 0; windowEnd < arr.length; ) {
    sum += arr[windowEnd];
    if (sum >= s) {
      const newMin = windowEnd - windowStart + 1;
      ans = Math.min(newMin, ans);
      sum -= arr[windowStart];
      windowStart++;
    } else {
      windowEnd++;
    }
  }
  return ans === Infinity ? 0 : ans;
};

const s = 7;
const arr = [2, 1, 5, 2, 3, 2];

const res = smallest_subarray_with_given_sum(s, arr);
console.log(res);
