// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return a array of integers
  solve: function (root) {
    const queue = [];
    let temp = root;
    let ans = [];
    let idx = 0;
    queue.push(temp);
    while (idx < queue.length) {
      const removed = queue[idx++];
      ans.push(removed.data);
      if (removed.right) {
        queue.push(removed.right);
      }
      if (removed.left) {
        queue.push(removed.left);
      }
    }
    return ans.reverse();
  },
};
