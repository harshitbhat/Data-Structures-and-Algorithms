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
var inorderTraversal = function (root) {
  const ans = [];
  const inOrder = (root) => {
    if (!root) return;
    inOrder(root.left);
    ans.push(root.val);
    inOrder(root.right);
  };
  inOrder(root);
  return ans;
};
