// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return an integer
  // solution by @harshitbhat
  minDepth: function (root) {
    if (!root) {
      return 0;
    }
    if (root.left && root.right) {
      return 1 + Math.min(this.minDepth(root.left), this.minDepth(root.right));
    } else if (root.left) {
      return 1 + this.minDepth(root.left);
    } else if (root.right) {
      return 1 + this.minDepth(root.right);
    } else {
      return 1;
    }
  },
};
