module.exports = {
  //param A : integer
  //return an integer
  colorful: function (n) {
    const arr = (n + '').split('');
    const hash = {};
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        const numArr = arr.slice(i, j + 1);
        let prod = 1;
        for (const el of numArr) {
          prod *= parseInt(el);
        }
        if (hash[prod]) {
          return 0;
        } else {
          hash[prod] = true;
        }
      }
    }
    return 1;
  },
};

function solve(n) {
  const arr = (n + '').split('');
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const numArr = arr.slice(i, j + 1);
      let prod = 1;
      for (const el of numArr) {
        prod *= parseInt(el);
      }
      if (hash[prod]) {
        return 0;
      } else {
        hash[prod] = true;
      }
    }
  }
  return 1;
}

console.log(solve(23));
