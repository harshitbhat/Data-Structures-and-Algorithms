// Naive - O(n^2)

function maxDifferenceN(arr) {
  let ans = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] > ans) {
        ans = arr[j] - arr[i];
      }
    }
  }
  return ans;
}

// O(N) solution

function maxDifference(arr) {
  let ans = Number.NEGATIVE_INFINITY;
  let minVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    ans = Math.max(ans, arr[i] - minVal);
    minVal = Math.min(minVal, arr[i]);
  }
  return ans;
}

const arr1 = [2, 3, 10, 6, 4, 8, 1];
const arr2 = [7, 9, 5, 6, 3, 2];
const arr3 = [10, 20, 30];
const arr4 = [30, 10, 8, 2];

console.log(maxDifference(arr1));
console.log(maxDifference(arr2));
console.log(maxDifference(arr3));
console.log(maxDifference(arr4));
