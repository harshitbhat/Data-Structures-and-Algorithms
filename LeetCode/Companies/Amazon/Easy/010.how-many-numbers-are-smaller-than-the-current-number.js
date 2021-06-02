/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const arr = [...nums].sort((a, b) => a - b);
  return nums.map((el) => arr.indexOf(el));
};
