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

// Bottom up Dynamic Programming

const minSubSetDiff = (arr) => {
  const sum = arr.reduce((sum, el) => sum + el, 0);
  const S = Math.floor(sum / 2);
  const n = arr.length;
  const dp = new Array(n).fill(true).map(() => new Array(S + 1).fill(true));

  for (let s = 1; s <= S; s++) {
    dp[0][s] = s === arr[0] ? true : false;
  }

  for (let i = 1; i < n; i++) {
    for (let s = 1; s <= S; s++) {
      dp[i][s] =
        s >= arr[i] ? dp[i - 1][s] || dp[i - 1][s - arr[i]] : dp[i - 1][s];
    }
  }

  for (let s = S; s >= 0; s--) {
    if (dp[n - 1][s] === true) {
      return sum - 2 * s;
    }
  }
};

//minSubSetDiff([1, 2, 3, 9]);

console.log(
  `Minimum subset difference is: ---> ${minSubSetDiff([1, 2, 3, 9])}`
);
console.log(
  `Minimum subset difference is: ---> ${minSubSetDiff([1, 2, 7, 1, 5])}`
);
console.log(
  `Minimum subset difference is: ---> ${minSubSetDiff([1, 3, 100, 4])}`
);
