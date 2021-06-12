// Naive: O(n^2), take sum for all subarray from i..j

function maxSubArraySum(arr) {
  const n = arr.length;
  let maxEnding = arr[0];
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxEnding = Math.max(maxEnding + arr[i], arr[i]);
    res = Math.max(res, maxEnding);
  }

  return res;
}
const arr = [-5, 1 - 2, 3, -1, 2, -2];
console.log(maxSubArraySum(arr));
