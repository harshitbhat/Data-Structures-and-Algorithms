module.exports = {
  singleNumber: function (arr) {
    let xor = 0;
    for (const el of arr) {
      xor = el ^ xor;
    }
    return xor;
  },
};
