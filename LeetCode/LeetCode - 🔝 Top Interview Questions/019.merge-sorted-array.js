/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const tempArr = [];
  let i, j;
  i = j = 0;
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      tempArr.push(nums1[i]);
      i++;
    } else {
      tempArr.push(nums2[j]);
      j++;
    }
  }
  while (i < m) {
    tempArr.push(nums1[i]);
    i++;
  }
  while (j < n) {
    tempArr.push(nums2[j]);
    j++;
  }

  for (let i = 0; i < tempArr.length; i++) {
    nums1[i] = tempArr[i];
  }
};
