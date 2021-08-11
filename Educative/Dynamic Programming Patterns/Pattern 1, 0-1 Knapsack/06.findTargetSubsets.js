// Recursive
const solve = (num, sum, curSum, idx) => {
  if (idx === num.length) {
    return sum === curSum ? 1 : 0;
  }
  if (num.length === 0 || idx > num.length) {
    return 0;
  }
  return (
    solve(num, sum, curSum + num[idx], idx + 1) +
    solve(num, sum, curSum - num[idx], idx + 1)
  );
};

const findTargetSubsetsRec = function (num, s) {
  return solve(num, s, 0, 0);
};

// console.log(
//   `Count of Target sum is: ---> ${findTargetSubsetsRec([1, 1, 2, 3], 1)}`
// );
// console.log(
//   `Count of Target sum is: ---> ${findTargetSubsetsRec([1, 2, 7, 1], 9)}`
// );

// Bottom up dp
/*

sum(s1) + sum(s2) = sum(arr)
sum(s1) - sum(s2) = s
2 * sum(s1) = (s + sum(arr))
sum(s1) = (s + sum(arr)) / 2 

The problem converts to count number of subsets with given sum.
*/

const findTargetSubsets = (nums, sum) => {
  const so = Math.floor((sum + nums.reduce((acc, el) => acc + el, 0)) / 2);
  const dp = new Array(nums.length)
    .fill(1)
    .map(() => new Array(so + 1).fill(1));

  for (let s = 1; s <= so; s++) {
    dp[0][s] = s === nums[0] ? 1 : 0;
  }

  for (let i = 1; i < nums.length; i++) {
    for (let s = 1; s <= so; s++) {
      dp[i][s] =
        s >= nums[i] ? dp[i - 1][s] + dp[i - 1][s - nums[i]] : dp[i - 1][s];
    }
  }

  return dp[nums.length - 1][so];
};

console.log(
  `Count of Target sum is: ---> ${findTargetSubsets([1, 1, 2, 3], 1)}`
);
console.log(
  `Count of Target sum is: ---> ${findTargetSubsets([1, 2, 7, 1], 9)}`
);
