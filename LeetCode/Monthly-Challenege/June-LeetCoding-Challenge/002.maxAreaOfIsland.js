/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxAreaOfIsland = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let ans = 0;

  const findConnected = (i, j) => {
    if (i < 0 || j < 0 || i >= rows || j >= cols) {
      return 0;
    }
    if (grid[i][j] === 0) {
      return 0;
    }

    let area = 1;

    grid[i][j] = 0; // visited

    let directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    directions.forEach((direction) => {
      area += findConnected(i + direction[0], j + direction[1]);
    });

    return area;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        ans = Math.max(ans, findConnected(i, j));
      }
    }
  }

  return ans;
};

const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

maxAreaOfIsland(grid);
