// function isSafe(row, col, board) {
//   for (let i = 0; i < col; i++) {
//     if (board[row][i]) return false;
//   }
//   for (let i = row, j = col; i >= 0 && j >= 0; j--, i--) {
//     if (board[i][j]) return false;
//   }
//   for (let i = row, j = col; j >= 0 && i < board.length; i++, j--) {
//     if (board[i][j]) return false;
//   }
//   return true;
// }

// function solveRec(col, board) {
//   const n = board.length;
//   if (col === n) {
//     return true;
//   }
//   for (let i = 0; i < n; i++) {
//     if (isSafe(i, col, board)) {
//       board[i][col] = 1;
//       if (solveRec(col + 1, board)) {
//         return true;
//       }
//       board[i][col] = 0;
//     }
//   }
//   return false;
// }

// function printBoard(board) {
//   for (const row of board) {
//     console.log(row);
//   }
// }

// function solve(n, board) {
//   if (solveRec(0, board) === false) {
//     console.log('Solution is not possible');
//     return;
//   }
//   printBoard(board);
// }

// const nQueensProblem = (n) => {
//   const board = new Array(n).fill(0).map(() => Array(n).fill(0));
//   solve(n, board);
// };

// nQueensProblem(5);
/* -------------------------------------------------------------------------- */
/*                                InterviewBit                                */
/* -------------------------------------------------------------------------- */
function isSafe(board, row, col) {
  for (let i = 0; i < col; i++) {
    if (board[row][i]) return false;
  }
  for (let i = row, j = col; i >= 0 && j >= 0; j--, i--) {
    if (board[i][j]) return false;
  }
  for (let i = row, j = col; j >= 0 && i < board.length; i++, j--) {
    if (board[i][j]) return false;
  }
  return true;
}

function possibilities(board, ans, col) {
  const n = board.length;
  if (col === n) {
    let temp = [];
    for (const row of board) {
      let ans = '';
      for (let i = 0; i < row.length; i++) {
        if (row[i] === 1) ans += 'Q';
        else ans += '.';
      }
      temp.push(ans);
    }
    ans.push(temp);
    return true;
  }
  let res = false;
  for (let i = 0; i < n; i++) {
    if (isSafe(board, i, col)) {
      board[i][col] = 1;
      res = possibilities(board, ans, col + 1) || res;
      board[i][col] = 0;
    }
  }
  return res;
}

function solveNQueens(n) {
  const board = new Array(n).fill(0).map(() => Array(n).fill(0));
  const ans = [];
  possibilities(board, ans, 0);
  console.log(ans);
  ans.sort();
  console.log(ans);
  return ans;
}

solveNQueens(5);

module.exports = {
  //param A : integer
  //return a array of array of integers
  solveNQueens: function (n) {
    const board = new Array(n).fill(0).map(() => Array(n).fill(0));
    const ans = [];
    possibilities(board, ans, 0);
    return ans;
  },
};
