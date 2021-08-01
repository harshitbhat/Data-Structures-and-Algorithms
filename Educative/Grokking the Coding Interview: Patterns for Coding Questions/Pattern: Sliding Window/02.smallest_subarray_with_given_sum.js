const smallest_subarray_with_given_sum = function (s, arr) {
  let ans = Infinity;

  let prefix = new Array(arr.length).fill(0);
  prefix[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }

  let windowStart = 0;
  let windowEnd = 0;

  while (windowEnd < arr.length) {
    let sum;
    if (windowEnd === windowStart) {
      sum = arr[windowEnd];
    } else {
      if (windowStart === 0) sum = prefix[windowEnd];
      else sum = prefix[windowEnd] - prefix[windowStart - 1];
    }
    if (sum >= s) {
      if (windowStart === windowEnd) {
        ans = 1;
        windowEnd++;
        windowStart++;
      } else {
        ans = Math.min(ans, windowEnd - windowStart + 1);
        windowStart++;
      }
    } else {
      windowEnd++;
    }
  }
  return ans === Infinity ? 0 : ans;
};

// without prefix sum, I thought too much
function smallest_subarray_with_given_sum(s, arr) {
  let windowSum = 0,
    minLength = Infinity,
    windowStart = 0;

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // shrink the window as small as possible until the 'window_sum' is smaller than 's'
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
}

const s = 7;
const arr = [2, 1, 5, 2, 3, 2];

const res = smallest_subarray_with_given_sum(s, arr);
console.log(res);
