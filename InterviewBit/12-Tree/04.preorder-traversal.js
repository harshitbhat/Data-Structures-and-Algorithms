// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return a array of integers
  preorderTraversal: function (root) {
    const stack = [];
    const ans = [];
    stack.push(root);
    while (stack.length > 0) {
      const removed = stack.pop();
      ans.push(removed.data);
      if (removed.right) {
        stack.push(removed.right);
      }
      if (removed.left) {
        stack.push(removed.left);
      }
    }
    return ans;
  },
};
