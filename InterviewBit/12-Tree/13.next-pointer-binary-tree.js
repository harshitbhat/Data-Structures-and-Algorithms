// Definition for a  binary tree node
//			function TreeNode(data){
//				this.data = data
//				this.left = null
//				this.right = null
//			}
function solve(node, level, map) {
  if (!node) return;
  if (!map[level]) {
    node.next = null;
    map[level] = node;
  } else {
    let curNode = map[level];
    curNode.next = node;
    map[level] = node;
  }
  solve(node.left, level + 1, map);
  solve(node.right, level + 1, map);
}

module.exports = {
  //param A : root node of tree
  //return nothing
  connect: function (root) {
    if (!root) return;
    const map = {};
    solve(root, 1, map);
    return root;
  },
};
