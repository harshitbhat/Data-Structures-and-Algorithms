/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */

const calcScore = (a, b) => {
  let n = a.length;
  let score = 0;
  for (let i = 0; i < n; i++) {
    score += a[i] === b[i] ? 1 : 0;
  }
  return score;
};

var maxCompatibilitySum = function (students, mentors) {
  const m = students.length;
  let ans = 0;
  const dp = new Array(m).fill(0).map(() => Array(m).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      dp[i][j] = calcScore(students[i], mentors[j]);
    }
  }
  for (const row of dp) {
    console.log(row);
  }
  return ans;
};

const students = [
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 1],
  [0, 1, 0],
];

const mentors = [
  [1, 0, 1],
  [0, 1, 1],
  [0, 1, 0],
  [1, 1, 0],
];

maxCompatibilitySum(students, mentors);

/*

[[1,1,1],[0,0,1],[0,0,1],[0,1,0]]
[[1,0,1],[0,1,1],[0,1,0],[1,1,0]]


*/
