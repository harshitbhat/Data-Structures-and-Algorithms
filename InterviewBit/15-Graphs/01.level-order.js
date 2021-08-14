// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return a array of array of integers
  //solution by @harshitbhat
  levelOrder: function (root) {
    const levels = [];
    const queue = [];

    queue.push([root, 0]);
    let idx = 0;

    while (idx < queue.length) {
      const removed = queue[idx];
      idx++;

      const node = removed[0];
      const level = removed[1];

      levels[level] = levels[level] || [];
      levels[level].push(node.data);

      if (node.left) {
        queue.push([node.left, level + 1]);
      }
      if (node.right) {
        queue.push([node.right, level + 1]);
      }
    }
    return levels;
  },
};
