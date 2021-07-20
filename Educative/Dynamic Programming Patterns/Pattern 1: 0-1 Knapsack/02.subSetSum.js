// Recursive Solution
const subSetSumUtil = (num, sum, currentIndex) => {
  if (sum === 0) {
    return true;
  }
  if (num.length === 0 || currentIndex >= num.length) {
    return false;
  }

  if (num[currentIndex] <= sum) {
    if (subSetSumUtil(num, sum - num[currentIndex], currentIndex + 1)) {
      return true;
    }
  }

  return subSetSumUtil(num, sum, currentIndex + 1);
};

// Bottom up DP

const subSetSumDP = (nums, sum) => {
  const dp = new Array(nums.length)
    .fill(false)
    .map(() => Array(sum + 1).fill(false));

  for (let i = 0; i < nums.length; i++) {
    dp[i][0] = true;
  }

  for (let s = 1; s <= sum; s++) {
    if (nums[0] === s) {
      dp[0][s] = true;
    }
  }

  for (let i = 1; i < nums.length; i++) {
    for (let s = 1; s <= sum; s++) {
      dp[i][s] =
        nums[i] <= s ? dp[i - 1][s] || dp[i - 1][s - nums[i]] : dp[i - 1][s];
    }
  }

  for (const row of dp) {
    console.log(row);
  }

  return dp[nums.length - 1][sum];
};

const subSetSum = function (num, sum) {
  //   return subSetSumUtil(num, sum, 0);
  return subSetSumDP(num, sum);
};
