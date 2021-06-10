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
var getLonelyNodes = function (root) {
  const ans = [];
  const getLonely = (root, parentHasLeftChild, parentHasRightChild) => {
    if (!root) return;
    if (parentHasLeftChild === false || parentHasRightChild === false) {
      ans.push(root.val);
    }
    getLonely(root.left, root.left !== null, root.right !== null);
    getLonely(root.right, root.left !== null, root.right !== null);
  };
  getLonely(root.left, root.left !== null, root.right !== null);
  getLonely(root.right, root.left !== null, root.right !== null);
  return ans;
};
