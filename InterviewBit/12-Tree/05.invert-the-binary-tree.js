// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return the root node in the tree
  invertTree: function (root) {
    if (!root) {
      return null;
    }
    let left = this.invertTree(root.left);
    let right = this.invertTree(root.right);

    root.left = right;
    root.right = left;

    return root;
  },
};
