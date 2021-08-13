/**
 * @param {Node} node
 * @returns {number[]}
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
  //Function to return the level order traversal of a tree.
  levelOrder(node) {
    if (!node) {
      return [];
    }
    const queue = [];
    const ans = [];

    queue.push(node);
    let idx = 0;

    while (idx < queue.length) {
      const temp = queue[idx];
      idx++;
      ans.push(temp.data);

      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
    }

    return ans;
  }
}
