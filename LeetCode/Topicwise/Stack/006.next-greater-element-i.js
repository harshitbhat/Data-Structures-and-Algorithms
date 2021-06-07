/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const ans = [];
  for (const el of nums1) {
    const idx = nums2.indexOf(el);
    let max = -1;
    for (let i = idx + 1; i < nums2.length; i++) {
      if (nums2[i] > el) {
        max = nums2[i];
        break;
      }
    }
    ans.push(max);
  }
  return ans;
};

/*

Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation:
For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
For number 1 in the first array, the next greater number for it in the second array is 3.
For number 2 in the first array, there is no next greater number for it in the second array, so output -1.

*/
