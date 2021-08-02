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
  maxDepth: function (root) {
    if (!root) {
      return 0;
    }
    return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
  },
};
