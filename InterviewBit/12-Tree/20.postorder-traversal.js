// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return a array of integers
  postorderTraversal: function (root) {
    const stack1 = [];
    const stack2 = [];
    const ans = [];

    stack1.push(root);

    while (stack1.length > 0) {
      let temp = stack1.pop();
      stack2.push(temp);

      if (temp.left) stack1.push(temp.left);
      if (temp.right) stack1.push(temp.right);
    }

    while (stack2.length > 0) {
      const temp = stack2.pop();
      ans.push(temp.data);
    }

    return ans;
  },
};
