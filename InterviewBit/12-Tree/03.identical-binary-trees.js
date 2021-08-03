// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //param B : root node of tree
  //return an integer
  isSameTree: function (A, B) {
    if (!A && !B) {
      return 1;
    }
    if (!A || !B) {
      return 0;
    }
    return A.data === B.data &&
      this.isSameTree(A.left, B.left) &&
      this.isSameTree(A.right, B.right)
      ? 1
      : 0;
  },
};
