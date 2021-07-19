module.exports = {
  //param A : integer
  //return a array of integers
  allFactors: function (n) {
    const ans = [];
    let i = 1;
    while (i * i <= n) {
      if (n % i === 0) {
        ans.push(i);
        if (i * i !== n) {
          ans.push(Math.floor(n / i));
        }
      }
      i++;
    }
    return ans.sort((a, b) => a - b);
  },
};
