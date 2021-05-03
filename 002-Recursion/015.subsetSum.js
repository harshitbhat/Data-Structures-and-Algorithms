function subsetSum(arr, n, sum) {
  if (n == 0) {
    return sum === 0 ? 1 : 0;
  }
  return subsetSum(arr, n - 1, sum) + subsetSum(arr, n - 1, sum - arr[n - 1]);
}

const arr = [10, 5, 2, 3, 6];
const sum = 8;

const ans = subsetSum(arr, arr.length, sum);
console.log(ans);
