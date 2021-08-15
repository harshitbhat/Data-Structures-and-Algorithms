// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

const path = (root, B, ans) => {
  if (!root) {
    return false;
  }
  ans.push(root.data);
  if (root.data === B) {
    return true;
  }
  if (path(root.left, B, ans) || path(root.right, B, ans)) {
    return true;
  }
  ans.pop();
  return false;
};

module.exports = {
  //param A : root node of tree
  //param B : integer
  //return a array of integers
  solve: function (root, B) {
    let ans = [];
    const isPath = path(root, B, ans);
    return isPath ? ans : [];
  },
};
