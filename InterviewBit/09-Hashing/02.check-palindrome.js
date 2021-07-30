module.exports = {
  //param A : string
  //return an integer
  solve: function (str) {
    const n = str.length;
    const hash = {};
    str = str.split('');
    for (const el of str) {
      if (hash[el]) {
        hash[el]++;
      } else {
        hash[el] = 1;
      }
    }
    let odds = 0;
    let even = 0;
    for (const key in hash) {
      if (hash[key] % 2 == 0) {
        even++;
      } else {
        odds++;
      }
    }
    if (n % 2 == 0) {
      if (odds === 0) {
        return 1;
      } else {
        return 0;
      }
    } else {
      if (odds === 1) {
        return 1;
      } else {
        return 0;
      }
    }
  },
};

function solve(str) {
  const n = str.length;
  const hash = {};
  str = str.split('');
  for (const el of str) {
    if (hash[el]) {
      hash[el]++;
    } else {
      hash[el] = 1;
    }
  }
  console.log(hash);
  let odds = 0;
  let even = 0;
  for (const key in hash) {
    if (hash[key] % 2 == 0) {
      even++;
    } else {
      odds++;
    }
  }
  console.log(even, odds);
  if (n % 2 == 0) {
    if (odds === 0) {
      return 1;
    } else {
      return 0;
    }
  } else {
    if (odds === 1) {
      return 1;
    } else {
      return 0;
    }
  }
}

solve('inttnikjmjbemrberk');
