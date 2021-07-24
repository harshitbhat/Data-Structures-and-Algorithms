// TO study later, could not solve

module.exports = {
  //param A : array of strings
  //return an integer
  solve: function (A) {
    //console.log(A.length);
    let n = [];
    let m = [];
    for (let i = 0; i < A[0].length; i++) {
      let fr = -1,
        lr = -1,
        fg = -1,
        lg = -1,
        fb = -1,
        lb = -1;
      //b , g, r
      let arr = [],
        exists = [false, false, false];
      for (let j = 0; j < A.length; j++) {
        let char = A[j][i];

        if (char === 'r') {
          exists[2] = true;
          fr === -1 && (fr = j);
          lr = j;
        }
        if (char === 'g') {
          exists[1] = true;
          fg === -1 && (fg = j);
          lg = j;
        }
        if (char === 'b') {
          exists[0] = true;
          fb === -1 && (fb = j);
          lb = j;
        }
      }

      if (fr != -1 && fg != -1)
        arr.push(Math.max(Math.abs(fr - lg), Math.abs(lr - fg)));
      else arr.push(-1);
      //console.log(fr, fg, arr);
      if (fr != -1 && fb != -1)
        arr.push(Math.max(Math.abs(fr - lb), Math.abs(lr - fb)));
      else arr.push(-1);
      //console.log(fr, lb, arr, A.length-1);
      //console.log(arr);
      if (fb != -1 && fg != -1)
        arr.push(Math.max(Math.abs(fb - lg), Math.abs(lb - fg)));
      else arr.push(-1);

      // console.log(arr);
      // console.log(exists);
      n.push(arr);
      m.push(exists);
    }

    let ans = 0;
    for (let i = 0; i < A[0].length; i++) {
      for (let k = 0; k < 3; k++) {
        for (let j = 0; j < A[0].length; j++) {
          if (m[j][k]) {
            ans = Math.max(
              ans,
              Math.ceil(0.5 * (n[i][k] + 1) * (Math.abs(i - j) + 1))
            );
          }
        }
      }
    }
    return ans;
  },
};

const getArea = (x1, y1, x2, y2, x3, y3) => {
  return Math.ceil(0.5 * (Math.abs(x1 - x2) + 1) * (Math.abs(y1 - y3) + 1));
};

function solve(mat) {
  const cols = [];

  const m = mat.length;
  const n = mat[0].length;

  for (let i = 0; i < n; i++) {
    const first = [];
    const last = [];
    for (const ch of 'rgb') {
      let idx = -Infinity;
      for (let j = 0; j < m; j++) {
        if (mat[j][i] === ch) {
          idx = j;
          break;
        }
      }
      first.push(idx);
      idx = -Infinity;
      for (let j = m - 1; j >= 0; j--) {
        if (mat[j][i] === ch) {
          idx = j;
          break;
        }
      }
      last.push(idx);
    }
    cols.push([first, last]);
  }
  for (const col of cols) {
    console.log(col);
  }

  let ans = -Infinity;

  for (let i = 0; i < n; i++) {
    const col = cols[i];

    const first = col[0];
    const last = col[1];

    let l = 0;

    for (let a = 0; a < 3; a++) {
      for (let b = 0; b < 3; b++) {
        if (a !== b) {
          l = Math.max(
            l,
            Math.abs(first[a] - first[b]),
            Math.abs(first[a] - last[b]),
            Math.abs(last[a] - first[b]),
            Math.abs(last[a] - last[b])
          );
        }
      }
    }
  }
}

const mat = ['rrrrr', 'rrrrg', 'rrrrr', 'bbbbb'];
solve(mat);
