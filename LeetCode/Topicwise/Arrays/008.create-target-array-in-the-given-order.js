/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let target = new Array();
  for (let i = 0; i < nums.length; i++) {
    target = [...target.slice(0, index[i]), nums[i], ...target.slice(index[i])];
    console.log(target);
  }
  return target;
};

createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]);
