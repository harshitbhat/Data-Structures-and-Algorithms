/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const ans = new Array();
  for (let i = 0; i < nums.length; i += 2) {
    const times = nums[i];
    for (let j = 0; j < times; j++) {
      ans.push(nums[i + 1]);
    }
  }
  return ans;
};
