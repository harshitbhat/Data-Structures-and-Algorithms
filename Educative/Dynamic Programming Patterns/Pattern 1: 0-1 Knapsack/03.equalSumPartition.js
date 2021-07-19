// Recursive
function sumArray(arr) {
  return arr.reduce((sum, el) => sum + el, 0);
}

function solveRec(num, sum, currentIndex) {
  if (sum === 0) return true;
  if (num.length === 0 || currentIndex >= num.length) return false;

  if (num[currentIndex] <= sum) {
    if (solveRec(num, sum - num[currentIndex], currentIndex + 1)) {
      return true;
    }
  }

  return solveRec(num, sum, currentIndex + 1);
}

// Top down with memoisation

function solveTD(dp, num, sum, currentIndex) {
  if (sum === 0) return true;
  if (num.length === 0 || currentIndex >= num.length) return false;

  dp[currentIndex] = dp[currentIndex] || [];

  if (!dp[currentIndex][sum]) {
    if (num[currentIndex] <= sum) {
      if (solveTD(dp, num, sum - num[currentIndex], currentIndex + 1)) {
        dp[currentIndex][sum] = true;
        return true;
      }
    }
    dp[currentIndex][sum] = solveTD(dp, num, sum, currentIndex + 1);
  }
  return dp[currentIndex][sum];
}

// Bottom Up Dynamic Programming
const solveBU = function (nums, sum) {};

let canPartition = function (num) {
  const sum = sumArray(num);

  if (sum % 2 !== 0) return false;

  //   return solveRec(num, sum / 2, 0);

  const dp = [];
  return solveTD(dp, num, sum / 2, 0);
};
