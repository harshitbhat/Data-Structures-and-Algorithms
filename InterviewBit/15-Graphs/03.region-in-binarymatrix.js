const direction = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

function check(m, n, i, j) {
  return i >= 0 && i < m && j >= 0 && j < n;
}

function traverse(matrix, visited, m, n, i, j) {
  if (matrix[i][j] === 0 || visited[i][j] === true) {
    return 0;
  }

  visited[i][j] = true;
  let path = 1;
  for (const [a, b] of direction) {
    if (check(m, n, i + a, j + b)) {
      path += traverse(matrix, visited, m, n, i + a, j + b);
    }
  }

  return path;
}

module.exports = {
  //param A : array of array of integers
  //return an integer
  solve: function (mat) {
    const m = mat.length;
    const n = mat[0].length;

    const visited = new Array(m)
      .fill(false)
      .map(() => new Array(n).fill(false));

    let ans = -Infinity;

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (mat[i][j] === 1 && !visited[i][j]) {
          const path = traverse(mat, visited, m, n, i, j);
          ans = Math.max(ans, path);
        }
      }
    }
    return ans;
  },
};
