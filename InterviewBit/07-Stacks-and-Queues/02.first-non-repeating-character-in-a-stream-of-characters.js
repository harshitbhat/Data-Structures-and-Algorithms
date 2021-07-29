module.exports = {
  //param A : string
  //return a strings
  solve: function (A) {
    let arr = [];
    let hash = {};
    let ans = A[0];
    arr.push(A[0]);
    let idx = 0;
    hash[A[0]] = 1;
    for (let i = 1; i < A.length; i++) {
      if (hash[A[i]]) {
        hash[A[i]]++;
        if (idx >= arr.length) {
          ans += '#';
        } else {
          if (hash[arr[idx]] > 1) {
            while (hash[arr[idx]] > 1) {
              idx++;
            }
            if (idx >= arr.length) {
              ans += '#';
            } else {
              ans += arr[idx];
            }
          } else {
            ans += arr[idx];
          }
        }
      } else {
        hash[A[i]] = 1;
        arr.push(A[i]);
        ans += arr[idx];
      }
    }
    return ans;
  },
};

/*

jyhrcwuengcbnuchctluxjgtxqtfvrebveewgasluuwooupcyxwgl
jjjjjjjjjjjjjjjjjjjjjyyyyyyyyyyyyyyyyyyyyyyyyyyyqqqqq
jjjjjjjjjjjjjjjjjjjjjyyyyyyyyyyyyyyyyyyyyyyyyyyyhrcwu


*/
