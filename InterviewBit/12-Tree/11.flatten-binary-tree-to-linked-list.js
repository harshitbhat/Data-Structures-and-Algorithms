// Definition for a  binary tree node
//			function TreeNode(data){
//				this.data = data
//				this.left = null
//				this.right = null
//			}

const solve = (root) => {
  if (!root) {
    return;
  }
  if (!root.left && !root.right) {
    return;
  }
  if (root.left) {
    solve(root.left);
    let tempNode = root.right;
    root.right = root.left;
    root.left = 0;

    let curNode = root.right;
    while (curNode.right) {
      curNode = curNode.right;
    }
    curNode.right = tempNode;
  }
  solve(root.right);
};

module.exports = {
  //param A : root node of tree
  //return the root node in the tree
  flatten: function (root) {
    solve(root);
    return root;
  },
};
