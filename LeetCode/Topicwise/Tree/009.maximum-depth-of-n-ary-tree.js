/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let ans = -1;
  const traverse = (root, curr) => {
    ans = Math.max(ans, curr);
    for (const child of root.children) {
      traverse(child, curr + 1);
    }
  };
  traverse(root, 1);
  return ans;
};
