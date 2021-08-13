// Question Link: https://practice.geeksforgeeks.org/problems/print-all-nodes-that-dont-have-sibling/1

class Solution {
  noSibling(root) {
    const ans = [];
    this.noSiblingUtil(root, ans);
    return ans.length > 0 ? ans.sort((a, b) => a - b) : [-1];
  }
  noSiblingUtil(root, ans) {
    if (!root) return;
    if (root.left && root.right) {
      this.noSiblingUtil(root.left, ans);
      this.noSiblingUtil(root.right, ans);
    } else if (root.left) {
      ans.push(root.left.data);
      this.noSiblingUtil(root.left, ans);
    } else if (root.right) {
      ans.push(root.right.data);
      this.noSiblingUtil(root.right, ans);
    }
  }
}
