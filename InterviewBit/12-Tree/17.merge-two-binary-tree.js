// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

const makeNewTree = (root1, root2) => {
  if (!root1) {
    return root2;
  }
  if (!root2) {
    return root1;
  }
  root1.data += root2.data;
  root1.left = makeNewTree(root1.left, root2.left);
  root1.right = makeNewTree(root1.right, root2.right);
  return root1;
};

module.exports = {
  //param A : root node of tree
  //param B : root node of tree
  //return the root node in the tree
  solve: function (root1, root2) {
    const root = makeNewTree(root1, root2);
    return root;
  },
};
