module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (arr, b) {
    const front = new Array(b).fill(0);
    const back = new Array(b).fill(0);
    front[0] = arr[0];
    for (let i = 1; i < b; i++) {
      front[i] = front[i - 1] + arr[i];
    }

    let j = arr.length - 1;
    back[0] = arr[j];
    j--;
    for (let i = 1; i < b; i++) {
      back[i] = back[i - 1] + arr[j];
      j--;
    }
    let ans = Math.max(front[b - 1], back[b - 1]);
    let i = b - 2;
    j = 0;
    while (i >= 0 && j < b) {
      ans = Math.max(ans, front[i] + back[j]);
      i--;
      j++;
    }
    return ans;
  },
};
