/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const ans = [];

  const preOrder = (root) => {
    if (!root) return;
    ans.push(root.val);
    if (root.children) {
      root.children.forEach((child) => preOrder(child));
    }
  };

  preOrder(root);
  return ans;
};
