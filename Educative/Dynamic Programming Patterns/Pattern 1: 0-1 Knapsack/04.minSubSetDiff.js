// Recursive

const solve = (nums, currentIndex, sum1, sum2) => {
  if (currentIndex === nums.length) {
    return Math.abs(sum1 - sum2);
  }

  const diff1 = solve(nums, currentIndex + 1, sum1 + nums[currentIndex], sum2);
  const diff2 = solve(nums, currentIndex + 1, sum1, sum2 + nums[currentIndex]);

  return Math.min(diff1, diff2);
};

const canPartition = (nums) => {
  return solve(nums, 0, 0, 0);
};
