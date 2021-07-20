module.exports = {
  //param A : integer
  //return an integer
  solve: function (target) {
    if (target === 0) {
      return 0;
    }
    if (target < 0) {
      target = -1 * target;
    }
    let i = 0;
    for (i = 1; ; i++) {
      if (Math.floor((i * (i + 1)) / 2) >= target) {
        break;
      }
    }
    let curr = Math.floor((i * (i + 1)) / 2);
    if (curr === target) {
      return i;
    }
    if ((curr - target) % 2 === 0) {
      return i;
    }
    i++;
    curr += i;
    if ((curr - target) % 2 === 0) {
      return i;
    }
    return i + 1;
  },
};
