/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function (items) {
  items.sort((a, b) => {
    if (a[0] == b[0]) {
      return b[1] - a[1];
    } else {
      return a[0] - b[0];
    }
  });
  const ans = [];
  let ids = new Set(items.map((item) => item[0]));
  for (const id of ids) {
    const idArr = items.filter((item) => item[0] === id);
    let sumArr = 0;
    for (let i = 0; i < 5; i++) {
      sumArr += idArr[i][1];
    }
    ans.push([id, Math.floor(sumArr / 5)]);
  }
  return ans;
};

// Better

var highFive2 = function (items) {
  items.sort((a, b) => {
    if (a[0] == b[0]) {
      return b[1] - a[1];
    } else {
      return a[0] - b[0];
    }
  });
  const ans = [];
  let score = items[0][1];
  let student = items[0][0];
  let ct = 1;
  for (let i = 1; i < items.length; i++) {
    if (student === items[i][0]) {
      if (ct < 5) {
        score += items[i][1];
        ct++;
      }
    } else {
      ans.push([student, Math.floor(score / 5)]);
      student = items[i][0];
      score = items[i][1];
      ct = 1;
    }
  }
  ans.push([student, Math.floor(score / 5)]); // Last student
  return ans;
};

highFive([
  [1, 91],
  [1, 92],
  [2, 93],
  [2, 97],
  [1, 60],
  [2, 77],
  [1, 65],
  [1, 87],
  [1, 100],
  [2, 100],
  [2, 76],
]);
