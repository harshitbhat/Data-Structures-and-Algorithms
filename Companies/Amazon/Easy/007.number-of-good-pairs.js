/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n^2)
/*
var numIdenticalPairs = function (nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        ans++;
      }
    }
  }
  return ans;
};
*/

// O(n) + O(n) space
var numIdenticalPairs = function (nums) {
  let ans = 0;
  const hash = {};
  for (const el of nums) {
    if (hash[el]) {
      ans += hash[el];
      hash[el]++;
    } else {
      hash[el] = 1;
    }
  }
  return ans;
};
