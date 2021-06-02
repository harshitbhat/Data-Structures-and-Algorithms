/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const ans = [];
  const elems = {};
  for (let i = 0; i < nums.length; i++) {
    elems[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    if (elems[target - nums[i]] && elems[target - nums[i]] !== i) {
      return [i, elems[target - nums[i]]];
    }
  }
};
