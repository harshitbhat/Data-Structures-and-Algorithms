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
    const ans = [];
    let prevLevel = -1;
    let pointer = 0;
    queue.push([root, 0]);
    while (pointer < queue.length) {
      const curr = queue[pointer];
      pointer++;
      const node = curr[0];
      const level = curr[1];
      if (level !== prevLevel) {
        ans.push(node.data);
        prevLevel = level;
      }
      if (node.right) {
        queue.push([node.right, level + 1]);
      }
      if (node.left) {
        queue.push([node.left, level + 1]);
      }
    }
    return ans;
  },
};
