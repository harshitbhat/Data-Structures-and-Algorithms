// Naive find sub arrays of all elems beginning with it,
// O(n^2)

// Effecient, hashing and prefix sum
/*
    - keep calculating prefix sum and put it in hash
    - if for any new prefix sum, the elem is already present in hash,
        - this means that the sub array sum is zero and this return true
        - [a1,a2,a3,a4,a5,a6,a7]
        - Lets, supposr that sum of [a3,a4,a5] = 0
        - then prefix sum from a1 to a2, should be equal to prefix sum from a1 to a5
        - additionally, if it becomes 0 while traversing, return true
*/

function checkZeroSubArraySum(arr) {
  const hash = {};
  let prefix = 0;
  for (let i = 0; i < arr.length; i++) {
    prefix += arr[i];
    if (hash[prefix]) return true;
    if (prefix === 0) return true;
    hash[prefix] = 1;
  }
  return false;
}

const arr1 = [-3, 2, 1, 4];
console.log(checkZeroSubArraySum(arr1));
