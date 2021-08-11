// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

const traverse = (root, sum, curSum) => {
  if (!root) {
    return 0;
  }
  if (!root.right && !root.left) {
    return curSum + root.data === sum ? 1 : 0;
  }
  return (
    traverse(root.left, sum, curSum + root.data) ||
    traverse(root.right, sum, curSum + root.data)
  );
};

module.exports = {
  //param A : root node of tree
  //param B : integer
  //return an integer
  // By @harshitbhat
  hasPathSum: function (root, sum) {
    return traverse(root, sum, 0);
  },
};
