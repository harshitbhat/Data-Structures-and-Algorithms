// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return a array of integers
  inorderTraversal: function (root) {
    const stack = [];
    const ans = [];
    let done = 0;
    let curr = root;

    while (true) {
      if (curr) {
        stack.push(curr);
        curr = curr.left;
      } else if (stack.length > 0) {
        curr = stack.pop();
        ans.push(curr.data);
        curr = curr.right;
      } else {
        break;
      }
    }
    return ans;
  },
};
