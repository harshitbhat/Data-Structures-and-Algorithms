module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    // A.sort((a, b) => a - b);
    // return A[A.length - 1] + A[0];
    return Math.min(...A) + Math.max(...A);
  },
};

/* -------------------------------------------------------------------------- */
/*                                  Editorial                                 */
/* -------------------------------------------------------------------------- */

// Using Divide and conquer

const getMinAndMax = (arr, low, high) => {
  let min = arr[low];
  let max = arr[low];

  if (low === high) {
    return [min, max];
  } else if (low + 1 === high) {
    return [Math.min(arr[low], arr[high]), Math.max(arr[low], arr[high])];
  } else {
    const mid = Math.floor((low + high) / 2);
    const [min1, max1] = getMinAndMax(arr, low, mid);
    const [min2, max2] = getMinAndMax(arr, mid + 1, high);
    return [Math.min(min1, min2), Math.max(max1, max2)];
  }
};

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    const [min, max] = getMinAndMax(A, 0, A.length - 1);
    return max + min;
  },
};
