// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

const depth = (root) => {
  if (!root) {
    return 0;
  }
  return 1 + Math.max(depth(root.left), depth(root.right));
};

module.exports = {
  //param A : root node of tree
  //return an integer
  isBalanced: function (root) {
    if (!root) {
      return 1;
    }
    if (Math.abs(depth(root.left) - depth(root.right)) > 1) {
      return 0;
    }
    return this.isBalanced(root.left) && this.isBalanced(root.right) ? 1 : 0;
  },
};
