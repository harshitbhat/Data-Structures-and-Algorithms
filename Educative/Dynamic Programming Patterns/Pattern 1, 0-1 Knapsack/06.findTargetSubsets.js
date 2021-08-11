// Recursive
const solve = (num, sum, curSum, idx) => {
  if (sum === curSum && idx === num.length - 1) {
    return 1;
  }
  if (idx >= num.length) {
    return 0;
  }
  return (
    solve(num, sum, curSum + num[idx], idx + 1) +
    solve(num, sum, curSum - num[idx], idx + 1)
  );
};

const findTargetSubsets = function (num, s) {
  return solve(num, s, 0, 0);
};

console.log(
  `Count of Target sum is: ---> ${findTargetSubsets([1, 1, 2, 3], 1)}`
);
console.log(
  `Count of Target sum is: ---> ${findTargetSubsets([1, 2, 7, 1], 9)}`
);
