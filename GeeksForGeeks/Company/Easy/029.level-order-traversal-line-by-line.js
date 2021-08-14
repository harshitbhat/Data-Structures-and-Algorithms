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
  //Function to return the level order traversal line by line of a tree.
  levelOrder(root) {
    if (!root) {
      return [];
    }

    const queue = [];
    const ans = [];
    let idx = 0;

    queue.push([root, 0]);

    while (idx < queue.length) {
      const removed = queue[idx];
      idx++;

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
    return ans;
  }
}
