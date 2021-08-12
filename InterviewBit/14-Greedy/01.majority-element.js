module.exports = {
  //param A : array of integers
  //return an integer
  majorityElement: function (arr) {
    const idx = Math.floor(arr.length / 2);
    arr.sort((a, b) => b - a);
    return arr[idx];
  },
};

/* -------------------------------------------------------------------------- */
/*                                  Editorial                                 */
/* -------------------------------------------------------------------------- */

module.exports = {
  //param A : array of integers
  //return an integer
  majorityElement: function (arr) {
    let majority = 0;
    let ct = 1;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[majority]) {
        ct++;
      } else {
        ct--;
      }
      if (ct === 0) {
        majority = i;
        ct = 1;
      }
    }
    return arr[majority];
  },
};
