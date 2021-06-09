/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let x = 0;
  let y = 0;
  for (const ch of moves) {
    if (ch === 'R') {
      x++;
    }
    if (ch === 'L') {
      x--;
    }
    if (ch === 'U') {
      y++;
    }
    if (ch === 'D') {
      y--;
    }
  }
  return x === 0 && y === 0;
};
