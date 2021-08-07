// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }
function constructTrees(start, end) {
  const ans = [];
  if (start > end) {
    ans.push(null);
    return ans;
  }
  for (let i = start; i <= end; i++) {
    const leftSubtree = constructTrees(start, i - 1);
    const rightSubTree = constructTrees(i + 1, end);
    for (let j = 0; j < leftSubtree.length; j++) {
      const left = leftSubtree[j];
      for (let k = 0; k < rightSubTree.length; k++) {
        const right = rightSubTree[k];
        const node = new TreeNode(i);
        node.left = left;
        node.right = right;
        ans.push(node);
      }
    }
  }
  return ans;
}

module.exports = {
  //param A : integer
  //return an array of TreeNode
  generateTrees: function (n) {
    return constructTrees(1, n);
  },
};
