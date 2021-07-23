module.exports = {
  //param A : integer
  //return a array of array of integers
  generateMatrix: function (n) {
    const ans = new Array(n).fill(0).map(() => new Array(n).fill(0));

    let k = 1;
    let i = 0;
    let j = 0;

    let currentDirection = 'right';

    while (k <= n * n) {
      if (currentDirection === 'right') {
        while (i >= 0 && j >= 0 && i < n && j < n && ans[i][j] === 0) {
          ans[i][j] = k++;
          j++;
        }
        i++;
        j--;
        currentDirection = 'down';
      } else if (currentDirection === 'down') {
        while (i >= 0 && j >= 0 && i < n && j < n && ans[i][j] === 0) {
          ans[i][j] = k++;
          i++;
        }
        i--;
        j--;
        currentDirection = 'left';
      } else if (currentDirection === 'left') {
        while (i >= 0 && j >= 0 && i < n && j < n && ans[i][j] === 0) {
          ans[i][j] = k++;
          j--;
        }
        i--;
        j++;
        currentDirection = 'up';
      } else if (currentDirection === 'up') {
        while (i >= 0 && j >= 0 && i < n && j < n && ans[i][j] === 0) {
          ans[i][j] = k++;
          i--;
        }
        i++;
        j++;
        currentDirection = 'right';
      }
    }

    return ans;
  },
};

function solve(n) {
  const ans = new Array(n).fill(0).map(() => new Array(n).fill(0));

  let k = 1;
  let i = 0;
  let j = 0;

  let currentDirection = 'right';

  while (k <= n * n) {
    if (currentDirection === 'right') {
      while (i >= 0 && j >= 0 && i < n && j < n && ans[i][j] === 0) {
        ans[i][j] = k++;
        j++;
      }
      i++;
      j--;
      currentDirection = 'down';
    } else if (currentDirection === 'down') {
      while (i >= 0 && j >= 0 && i < n && j < n && ans[i][j] === 0) {
        ans[i][j] = k++;
        i++;
      }
      i--;
      j--;
      currentDirection = 'left';
    } else if (currentDirection === 'left') {
      while (i >= 0 && j >= 0 && i < n && j < n && ans[i][j] === 0) {
        ans[i][j] = k++;
        j--;
      }
      i--;
      j++;
      currentDirection = 'up';
    } else if (currentDirection === 'up') {
      while (i >= 0 && j >= 0 && i < n && j < n && ans[i][j] === 0) {
        ans[i][j] = k++;
        i--;
      }
      i++;
      j++;
      currentDirection = 'right';
    }
  }

  return ans;
}

const ans = solve(1);

for (const row of ans) {
  console.log(row);
}
