// Naive - O(n^2)

// Efficient, store index with prefix sum, where it end

function largestSubArrayWithGivenSum(arr, sum) {
  let prefix = 0;
  let ans = 0;
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    prefix += arr[i];
    if (prefix === sum) ans = Math.max(ans, i + 1);
    if (!hash[prefix]) hash[prefix] = i;
    if (hash[prefix - sum]) {
      ans = Math.max(ans, i - hash[prefix - sum]);
    }
    // console.log(ans, prefix, hash);
  }
  return ans;
}

const arr = [8, 3, 1, 5, -6, 6, 2, 2];
const sum = 4;

console.log(largestSubArrayWithGivenSum(arr, sum));
