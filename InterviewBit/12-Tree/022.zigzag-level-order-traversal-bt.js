// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return a array of array of integers
  zigzagLevelOrder: function (root) {
    const ans = [];
    if (!root) {
      return ans;
    }
    const queue = [[root, 0]];
    let idx = 0;

    while (idx < queue.length) {
      let [node, level] = queue[idx];
      idx++;

      ans[level] = ans[level] || [];

      if (level % 2 !== 0) {
        ans[level].unshift(node.data);
      } else {
        ans[level].push(node.data);
      }

      if (node.left) queue.push([node.left, level + 1]);
      if (node.right) queue.push([node.right, level + 1]);
    }

    return ans;
  },
};
