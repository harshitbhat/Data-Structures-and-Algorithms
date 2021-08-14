/*
class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} root
 * @param {number} S
 * @return {boolean}
 */

const solve = (root, S, currentSum) => {
  if (!root) {
    return false;
  }
  if (!root.left && !root.right) {
    return root.key + currentSum === S;
  }
  return (
    solve(root.left, S, currentSum + root.key) ||
    solve(root.right, S, currentSum + root.key)
  );
};

class Solution {
  hasPathSum(root, S) {
    return solve(root, S, 0);
  }
}
