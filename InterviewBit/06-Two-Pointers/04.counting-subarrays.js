module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (arr, B) {
    const prefix = new Array(arr.length).fill(0);
    prefix[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
      prefix[i] += prefix[i - 1] + arr[i];
    }

    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
      if (prefix[i] < B) {
        ans++;
      }
      for (let j = i - 1; j >= 0; j--) {
        if (prefix[i] - prefix[j] < B) {
          ans++;
        }
      }
    }

    return ans;
  },
};

// Editorial Solution

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    var count = 0;
    var leftIndex = 0;
    var rightIndex = 0;
    var sum = 0;
    var nextSum = 0;

    while (rightIndex < A.length) {
      sum += A[rightIndex];
      //console.log(rightIndex);
      if (sum < B) {
        rightIndex++;
        count += rightIndex - leftIndex;
      } else {
        while (sum >= B) {
          sum -= A[leftIndex];
          leftIndex++;
        }
        rightIndex++;
        count += rightIndex - leftIndex;
      }
    }

    return count;
  },
};
