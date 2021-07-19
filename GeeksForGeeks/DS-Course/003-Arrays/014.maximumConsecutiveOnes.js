// Naive: O(n^2) solution

// Keep an extra variable

function maxOnes(arr) {
  let ans = 0;
  let curMax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      curMax = 0;
    } else {
      curMax++;
      ans = Math.max(curMax, ans);
    }
  }
  return ans;
}

const arr1 = [0, 1, 1, 1, 0, 1, 0];
const arr2 = [1, 1, 1, 1];
const arr3 = [0, 0, 0];
const arr4 = [1, 0, 1, 1, 1, 1, 1, 1, 1];

console.log(maxOnes(arr1));
console.log(maxOnes(arr2));
console.log(maxOnes(arr3));
console.log(maxOnes(arr4));
