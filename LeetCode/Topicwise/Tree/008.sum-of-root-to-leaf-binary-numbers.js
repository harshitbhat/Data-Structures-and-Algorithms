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
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  const queue = [];
  const final = [];
  queue.push([root, '']);

  while (queue.length > 0) {
    const removed = queue.shift();
    if (removed[0].left) {
      queue.push([removed[0].left, removed[1] + removed[0].val]);
    }
    if (removed[0].right) {
      queue.push([removed[0].right, removed[1] + removed[0].val]);
    }
    if (removed[0].left === null && removed[0].right === null) {
      final.push(removed[1] + removed[0].val);
    }
  }
  return final.reduce((cur, el) => cur + parseInt(el, 2), 0);
};
