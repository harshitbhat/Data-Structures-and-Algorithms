// Question Link: https://practice.geeksforgeeks.org/problems/check-for-bst/1/

class Solution {
  //Function to check whether a Binary Tree is BST or not.
  // Wrong arrpoach, can have a subtree, below the root node, which is greater less than root
  /*
  isBST(root) {
    if (!root) {
      return true;
    }
    if (!root.left && !root.right) {
      return true;
    }
    if (root.left) {
      if (root.left.data < root.data) {
        return this.isBST(root.left);
      } else {
        return false;
      }
    }
    if (root.right) {
      if (root.right.data > root.data) {
        return this.isBST(root.right);
      } else {
        return false;
      }
    }
  }
  */
  isBST(root) {
    return this.isBSTUtil(root, -Infinity, Infinity);
  }

  // Helper function
  isBSTUtil(root, min, max) {
    if (!root) return true;

    // If a node violates min max constraints
    if (root.data < min && root.data > max) return false;

    return (
      this.isBSTUtil(root.left, min, root.data - 1) &&
      this.isBSTUtil(root.right, root.data + 1, max)
    );
  }
}
