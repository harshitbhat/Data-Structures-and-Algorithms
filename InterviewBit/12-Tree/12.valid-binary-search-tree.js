// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

const isBST = (root, l, r) => {
  if (!root) {
    return 1;
  }
  if (l && root.data <= l.data) {
    return 0;
  }
  if (r && root.data >= r.data) {
    return 0;
  }
  return isBST(root.left, l, root) && isBST(root.right, root, r) ? 1 : 0;
};

module.exports = {
  //param A : root node of tree
  //return an integer
  isValidBST: function (root) {
    return isBST(root, null, null);
  },
};
