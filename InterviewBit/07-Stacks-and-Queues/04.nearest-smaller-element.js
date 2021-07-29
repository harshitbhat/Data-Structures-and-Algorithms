module.exports = {
  //param A : array of integers
  //return a array of integers
  prevSmaller: function (A) {
    const stack = [];
    const ans = [];
    for (let i = 0; i < A.length; i++) {
      if (stack.length === 0) {
        ans.push(-1);
        stack.push(A[i]);
      } else {
        let top = stack.length - 1;
        if (stack[top] < A[i]) {
          ans.push(stack[top]);
          stack.push(A[i]);
        } else {
          while (stack.length > 0 && stack[top] >= A[i]) {
            stack.pop();
            top = stack.length - 1;
          }
          if (stack.length === 0) {
            ans.push(-1);
            stack.push(A[i]);
          } else {
            ans.push(stack[top]);
            stack.push(A[i]);
          }
        }
      }
    }
    return ans;
  },
};

/*

Your submission failed for the following input
A : [ 34, 35, 27, 42, 5, 28, 39, 20, 28 ]

The expected return value: 
-1 34 -1 27 -1 5 28 5 20 
Your function returned the following: 
-1 34 -1 27 -1 5 5 5 5 


*/
