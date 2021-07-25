module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  diffPossible: function (arr, k) {
    if (arr.length <= 1) {
      return 0;
    }
    const hash = {};
    for (const el of arr) {
      if (hash[el]) hash[el]++;
      else hash[el] = 1;
    }
    let ans = 0;
    for (const el of arr) {
      if (hash[el + k]) {
        if (el + k === el) {
          if (hash[el] > 1) {
            ans = 1;
            break;
          } else {
            ans = 0;
          }
        } else {
          ans = 1;
          break;
        }
      }
    }
    return ans;
  },
};

function solve(arr, k) {
  if (arr.length <= 1) {
    return 0;
  }
  const hash = {};
  for (const el of arr) {
    if (hash[el]) hash[el]++;
    else hash[el] = 1;
  }
  let ans = 0;
  for (const el of arr) {
    if (el + k === el) {
      if (hash[el] > 1) {
        ans = 1;
      } else {
        ans = 1;
      }
    }
    if (hash[el + k]) {
      ans = 1;
    }
  }
  return ans;
}

// const arr = [
//   0, 1, 9, 10, 13, 17, 17, 17, 23, 25, 29, 30, 37, 38, 39, 39, 40, 41, 42, 60,
//   64, 70, 70, 70, 72, 75, 85, 85, 90, 91, 91, 93, 95,
// ];

// const b = 83;
console.log(solve([1, 2, 2, 3, 4], 0));
