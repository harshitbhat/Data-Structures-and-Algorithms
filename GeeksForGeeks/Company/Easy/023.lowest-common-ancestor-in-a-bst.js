/**
 * @param {Node} root
 * @param {number} n1
 * @param {number} n2
 * @returns {Node}
 */

class Solution {
  //Function to find the lowest common ancestor in a BST.
  LCA(root, n1, n2) {
    if (!root) {
      return null;
    }
    if (
      (n1 <= root.data && n2 >= root.data) ||
      (n2 <= root.data && n1 >= root.data)
    ) {
      return root;
    }

    if (n1 < root.data && n2 < root.data) {
      return this.LCA(root.left, n1, n2);
    }
    if (n1 > root.data && n2 > root.data) {
      return this.LCA(root.right, n1, n2);
    }
  }
}
