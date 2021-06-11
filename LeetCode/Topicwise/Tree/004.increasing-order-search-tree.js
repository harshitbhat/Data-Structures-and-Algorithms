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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  let newRoot = null;
  let temp = null;

  const inOrder = (node) => {
    if (!node) return;

    inOrder(node.left);

    if (!newRoot) newRoot = temp = node;
    else {
      temp.right = node;
      temp = temp.right;
      node.left = null;
    }

    inOrder(node.right);
  };

  inOrder(root);
  return newRoot;
};
