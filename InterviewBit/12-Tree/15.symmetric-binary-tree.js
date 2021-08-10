// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

const isMirror = (node1, node2) => {
  if (!node1 && !node2) {
    return 1;
  }
  if (node1 && node2 && node1.data === node2.data) {
    return isMirror(node1.left, node2.right) &&
      isMirror(node1.right, node2.left)
      ? 1
      : 0;
  }
  return 0;
};

module.exports = {
  //param A : root node of tree
  //return an integer
  isSymmetric: function (root) {
    return isMirror(root, root);
  },
};
