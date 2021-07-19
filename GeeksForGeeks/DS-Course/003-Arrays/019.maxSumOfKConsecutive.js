function maxSumK(arr, k) {
  const n = arr.length;
  let curSum = 0;
  for (let i = 0; i < k; i++) {
    curSum += arr[i];
  }
  let maxSum = curSum;
  for (let i = 1; i < n - k + 1; i++) {
    curSum += arr[i + k - 1] - arr[i - 1];
    maxSum = Math.max(curSum, maxSum);
  }

  return maxSum;
}

maxSumK([1, 8, 30, -5, 20, 70], 3);
