/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const ans = [];
  let queue = [];
  queue.push(root);
  while (queue.length) {
    const nextLevel = [];
    let levelSum = 0;
    for (const node of queue) {
      if (node.left) {
        nextLevel.push(node.left);
      }
      if (node.right) {
        nextLevel.push(node.right);
      }
      levelSum += node.val;
    }
    ans.push(levelSum / queue.length);
    queue = nextLevel;
  }
  return ans;
};
