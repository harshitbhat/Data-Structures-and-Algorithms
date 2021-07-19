// O(n^2) - two loops

// Sort and use 2 pointer approach - O(n logn)

// O(n) with O(n) space
function twoSum(arr, sum) {
  const hash = {};
  for (const el of arr) hash[el] ? hash[el]++ : (hash[el] = 1);
  for (const el of arr) {
    if (2 * el === sum && hash[el] > 1) return true;
    if (sum - el !== el && hash[sum - el]) return true;
  }
  return false;
}

const arr = [1, 2, 3, 4, 5, 5, 6];
console.log(twoSum(arr, 10));
