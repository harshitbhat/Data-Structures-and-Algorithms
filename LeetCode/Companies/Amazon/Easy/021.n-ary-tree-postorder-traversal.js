/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  const ans = [];
  const postOrderTraversal = (root) => {
    if (!root) return;
    root.children.forEach((ch) => postOrderTraversal(ch));
    ans.push(root.val);
  };
  postOrderTraversal(root);
  return ans;
};
