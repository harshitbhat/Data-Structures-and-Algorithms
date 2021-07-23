module.exports = {
  //param A : array of array of integers
  //return a array of array of integers
  diagonal: function (mat) {
    const ans = [];

    const n = mat.length;

    for (let i = 0; i < n; i++) {
      const anti = [];
      let k = 0;
      let j = i;
      while (k < n && j >= 0) {
        anti.push(mat[k][j]);
        k++;
        j--;
      }
      ans.push(anti);
    }

    for (let i = 1; i < n; i++) {
      const anti = [];
      let k = n - 1;
      let j = i;
      while (k < n && j < n) {
        anti.push(mat[j][k]);
        k--;
        j++;
      }
      ans.push(anti);
    }

    return ans;
  },
};

// function solve(mat) {
//   const ans = [];

//   const n = mat.length;

//   for (let i = 0; i < n; i++) {
//     const anti = [];
//     let k = 0;
//     let j = i;
//     while (k < n && j >= 0) {
//       anti.push(mat[k][j]);
//       k++;
//       j--;
//     }
//     ans.push(anti);
//   }

//   for (let i = 1; i < n; i++) {
//     const anti = [];
//     let k = n - 1;
//     let j = i;
//     while (k < n && j < n) {
//       anti.push(mat[j][k]);
//       k--;
//       j++;
//     }
//     ans.push(anti);
//   }

//   return ans;
// }

// const mat = [
//   ['a', 'b', 'c', 'd'],
//   ['e', 'f', 'g', 'h'],
//   ['i', 'j', 'k', 'l'],
//   ['m', 'n', 'o', 'p'],
// ];

// solve(mat);
