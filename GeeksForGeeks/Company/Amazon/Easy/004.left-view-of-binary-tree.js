// Question Link: https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1/

class Solution {
  leftView(root) {
    const ans = [];
    if (root === null) {
      return ans;
    }

    const queue = [];
    queue.push([root, 0]);
    let prevLevel = -1;
    while (queue.length > 0) {
      const removed = queue.shift();

      let node = removed[0];
      let level = removed[1];

      if (level !== prevLevel) {
        ans.push(node.data);
        prevLevel++;
      }

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
