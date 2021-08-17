const directions = [
  [-1, 0],
  [0, -1],
  [0, 1],
  [1, 0],
];

function check(m, n, i, j) {
  return i >= 0 && i < m && j >= 0 && j < n;
}

function dfs(mat, visited, m, n, i, j) {
  if (mat[i][j] === 'O' || visited[i][j]) {
    return;
  }
  visited[i][j] = true;
  for (const [a, b] of directions) {
    if (check(m, n, i + a, j + b)) {
      dfs(mat, visited, m, n, i + a, j + b);
    }
  }
}

module.exports = {
  //param A : array of strings
  //return an integer
  black: function (mat) {
    const visited = new Array(mat.length)
      .fill(false)
      .map(() => new Array(mat[0].length).fill(false));

    let ans = 0;
    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[0].length; j++) {
        if (mat[i][j] === 'X' && !visited[i][j]) {
          ans++;
          dfs(mat, visited, mat.length, mat[0].length, i, j);
        }
      }
    }
    return ans;
  },
};
