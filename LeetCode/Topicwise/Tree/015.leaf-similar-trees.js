/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

const getLeafNodes = (root, arr) => {
  if (root === null) return;
  if (!root.left && !root.right) arr.push(root.val);
  getLeafNodes(root.left, arr);
  getLeafNodes(root.right, arr);
};

var leafSimilar = function (root1, root2) {
  const leafNodes1 = [];
  const leafNodes2 = [];

  getLeafNodes(root1, leafNodes1);
  getLeafNodes(root2, leafNodes2);

  if (leafNodes1.length !== leafNodes2.length) return false;

  let i = 0;
  while (i < leafNodes2.length) {
    if (leafNodes1[i] !== leafNodes2[i]) return false;
    i++;
  }
  return true;
};
