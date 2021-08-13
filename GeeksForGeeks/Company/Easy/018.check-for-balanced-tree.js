/**
 * @param {Node} root
 * @returns {boolean}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

const height = (root) => {
  if (!root) return 0;
  return 1 + Math.max(height(root.left), height(root.right));
};

class Solution {
  //Function to check whether a binary tree is balanced or not.
  isBalanced(root) {
    if (!root) {
      return true;
    }
    return (
      Math.abs(height(root.left) - height(root.right)) <= 1 &&
      this.isBalanced(root.left) &&
      this.isBalanced(root.right)
    );
  }
}
