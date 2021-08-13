/**
 * @param {Node} node
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

class Solution {
  // Function to convert a binary tree into its mirror tree.
  mirror(node) {
    if (!node) {
      return;
    }
    [node.left, node.right] = [node.right, node.left];
    this.mirror(node.left);
    this.mirror(node.right);
  }
}
