function findSubsets(arr, subset, idx, ans) {
  ans.push([...subset]);
  for (let i = idx; i < arr.length; i++) {
    subset.push(arr[i]);
    findSubsets(arr, subset, i + 1, ans);
    subset.pop();
  }
  return;
}

function subsetsWithDup(arr) {
  const subset = [];
  let idx = 0;
  const ans = [];
  findSubsets(arr, subset, idx, ans);
  const hash = {};
  for (const row of ans) {
    hash[row.sort((a, b) => a - b).join('-')] = true;
  }
  //   console.log(hash);
  const modifiedAns = [];
  for (const key of Object.keys(hash)) {
    const tempArr = key.split('-');
    for (let i = 0; i < tempArr.length; i++) {
      tempArr[i] = parseInt(tempArr[i]);
    }
    modifiedAns.push(tempArr);
  }
  modifiedAns.sort((a, b) => {
    if (a[0] === b[0]) {
      return 0;
    } else {
    }
    return a[0] - b[0];
  });
  //   modifiedAns.pop();
  //   modifiedAns.unshift([]);
  //   console.log('='.repeat(50));
  for (const row of modifiedAns) {
    console.log(row);
  }
}

subsetsWithDup([1, 9, 10, 10, 3, 8, 9]);

module.exports = {
  //param A : array of integers
  //return a array of array of integers
  subsetsWithDup: function (arr) {
    const subset = [];
    let idx = 0;
    const ans = [];
    findSubsets(arr, subset, idx, ans);
    const hash = {};
    for (const row of ans) {
      hash[row.sort().join('-')] = true;
    }
    const modifiedAns = [];
    for (const key of Object.keys(hash)) {
      const tempArr = key.split('-');
      for (let i = 0; i < tempArr.length; i++) {
        tempArr[i] = parseInt(tempArr[i]);
      }
      modifiedAns.push(tempArr);
    }
    modifiedAns.sort();
    modifiedAns.pop();
    modifiedAns.unshift([]);
    return modifiedAns;
  },
};

/*


TestCase - Correctness  Failed
Your submission failed for the following input
A : [ 1, 9, 10, 10, 3, 8, 9 ]

The expected return value: 
[] [1 ] [1 3 ] [1 3 8 ] [1 3 8 9 ] [1 3 8 9 9 ] [1 3 8 9 9 10 ] [1 3 8 9 9 10 10 ] [1 3 8 9 10 ] [1 3 8 9 10 10 ] [1 3 8 10 ] [1 3 8 10 10 ] [1 3 9 ] [1 3 9 9 ] [1 3 9 9 10 ] [1 3 9 9 10 10 ] [1 3 9 10 ] [1 3 9 10 10 ] [1 3 10 ] [1 3 10 10 ] [1 8 ] [1 8 9 ] [1 8 9 9 ] [1 8 9 9 10 ] [1 8 9 9 10 10 ] [1 8 9 10 ] [1 8 9 10 10 ] [1 8 10 ] [1 8 10 10 ] [1 9 ] [1 9 9 ] [1 9 9 10 ] [1 9 9 10 10 ] [1 9 10 ] [1 9 10 10 ] [1 10 ] [1 10 10 ] [3 ] [3 8 ] [3 8 9 ] [3 8 9 9 ] [3 8 9 9 10 ] [3 8 9 9 10 10 ] [3 8 9 10 ] [3 8 9 10 10 ] [3 8 10 ] [3 8 10 10 ] [3 9 ] [3 9 9 ] [3 9 9 10 ] [3 9 9 10 10 ] [3 9 10 ] [3 9 10 10 ] [3 10 ] [3 10 10 ] [8 ] [8 9 ] [8 9 9 ] [8 9 9 10 ] [8 9 9 10 10 ] [8 9 10 ] [8 9 10 10 ] [8 10 ] [8 10 10 ] [9 ] [9 9 ] [9 9 10 ] [9 9 10 10 ] [9 10 ] [9 10 10 ] [10 ] [10 10 ] 
Your function returned the following: 
[] [1 ] [1 10 ] [1 10 10 ] [1 10 10 3 ] [1 10 10 3 8 ] [1 10 10 3 8 9 ] [1 10 10 3 8 9 9 ] [1 10 10 3 9 ] [1 10 10 3 9 9 ] [1 10 10 8 ] [1 10 10 8 9 ] [1 10 10 8 9 9 ] [1 10 10 9 ] [1 10 10 9 9 ] [1 10 3 ] [1 10 3 8 ] [1 10 3 8 9 ] [1 10 3 8 9 9 ] [1 10 3 9 ] [1 10 3 9 9 ] [1 10 8 ] [1 10 8 9 ] [1 10 8 9 9 ] [1 10 9 ] [1 10 9 9 ] [1 3 ] [1 3 8 ] [1 3 8 9 ] [1 3 8 9 9 ] [1 3 9 ] [1 3 9 9 ] [1 8 ] [1 8 9 ] [1 8 9 9 ] [1 9 ] [1 9 9 ] [10 ] [10 10 ] [10 10 3 ] [10 10 3 8 ] [10 10 3 8 9 ] [10 10 3 8 9 9 ] [10 10 3 9 ] [10 10 3 9 9 ] [10 10 8 ] [10 10 8 9 ] [10 10 8 9 9 ] [10 10 9 ] [10 10 9 9 ] [10 3 ] [10 3 8 ] [10 3 8 9 ] [10 3 8 9 9 ] [10 3 9 ] [10 3 9 9 ] [10 8 ] [10 8 9 ] [10 8 9 9 ] [10 9 ] [10 9 9 ] [3 ] [3 8 ] [3 8 9 ] [3 8 9 9 ] [3 9 ] [3 9 9 ] [8 ] [8 9 ] [8 9 9 ] [9 ] [9 9 ] 
Final Verdict
> Wrong Answer


*/

// I could not sort, else the solution was correct

/* -------------------------------------------------------------------------- */
/*                             Editorial Solution                             */
/* -------------------------------------------------------------------------- */

module.exports = {
  //param A : array of integers
  //return a array of array of integers
  subsetsWithDup: function (A) {
    var res = [[]];

    A = A.sort(function (a, b) {
      return a - b;
    });

    makeSubsets(A, 0, res, [], 0);
    return res;
  },
};

function makeSubsets(arr, start, res, curr, currSt) {
  for (var i = start; i < arr.length; i++) {
    if (i > start && arr[i] == arr[i - 1]) continue;

    curr[currSt] = arr[i];
    res.push(curr.slice());
    makeSubsets(arr, i + 1, res, curr.slice(), currSt + 1);
  }
}
