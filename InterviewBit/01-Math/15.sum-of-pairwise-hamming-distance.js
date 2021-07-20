const checkZero = (arr) => arr.every((el) => el === 0);
const MOD = 1000000007;
module.exports = {
  //param A : array of integers
  //return an integer
  hammingDistance: function (A) {
    let ans = 0;
    const n = A.length;
    while (!checkZero(A)) {
      let set = 0;
      for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 !== 0) {
          set++;
        }
        A[i] = A[i] >> 1;
      }
      //   console.log(A);
      ans = ((ans % MOD) + ((2 * set * (n - set)) % MOD)) % MOD;
    }
    return ans;
  },
};
