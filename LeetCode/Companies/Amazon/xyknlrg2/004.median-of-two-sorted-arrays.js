/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const sorted = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      sorted.push(nums1[i]);
      i++;
    } else {
      sorted.push(nums2[j]);
      j++;
    }
  }
  while (i < nums1.length) {
    sorted.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    sorted.push(nums2[j]);
    j++;
  }
  const n = sorted.length;
  if (n % 2 === 0) {
    return (sorted[n / 2] + sorted[n / 2 - 1]) / 2.0;
  } else {
    return sorted[Math.floor(n / 2)] / 1.0;
  }
};
