/**
 * @param {Node} root
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
  //Function to return a list containing the level order
  //traversal in spiral form.
  findSpiral(root) {
    //your code here
    if (!root) return [];
    const ans = [];
    const queue = [];

    queue.push([root, 0]);

    while (queue.length > 0) {
      const removed = queue.shift();

      const node = removed[0];
      const level = removed[1];

      ans[level] = ans[level] || [];
      ans[level].push(node.data);

      if (node.left) {
        queue.push([node.left, level + 1]);
      }
      if (node.right) {
        queue.push([node.right, level + 1]);
      }
    }
    for (let i = 0; i < ans.length; i++) {
      if (i % 2 == 0) {
        ans[i] = ans[i].reverse();
      }
    }
    return ans.flat();
  }
}

// Tree: 9 8 11 4 N 10 12 3 7 N N N N 2 N 6 N 1 N 5 N 0 N N N N N
