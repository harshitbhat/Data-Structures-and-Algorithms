// Naive - every subarray - O(n^2)
function subArrayWithGivenSum(arr, sum) {
  let prefix = 0;
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    prefix += arr[i];
    if (prefix === sum) return true;
    if (hash[prefix - sum]) return true;
    hash[prefix] = 1;
  }
  return false;
}

const arr1 = [5, 8, 6, 13, 3, -1];
const sum1 = 22;

const arr2 = [15, 2, 8, 10, -5, -8, 6];
const sum2 = 3;

const arr3 = [3, 2, 5, 6];
const sum3 = 10;

console.log(subArrayWithGivenSum(arr1, sum1));
console.log(subArrayWithGivenSum(arr2, sum2));
console.log(subArrayWithGivenSum(arr3, sum3));
