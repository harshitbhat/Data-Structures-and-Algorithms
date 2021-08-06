// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

const findPath = (root, n, path) => {
  if (!root) {
    return false;
  }
  path.push(root.data);
  if (root.data === n) {
    return true;
  }
  if (root.left && findPath(root.left, n, path)) {
    return true;
  }
  if (root.right && findPath(root.right, n, path)) {
    return true;
  }
  path.pop();
  return false;
};

const findLCA = (root, node1, path1, node2, path2) => {
  if (!findPath(root, node1, path1) || !findPath(root, node2, path2)) {
    return -1;
  }
  let i;
  for (i = 0; i < path1.length && i < path2.length; i++) {
    if (path1[i] !== path2[i]) {
      break;
    }
  }
  return path1[i - 1];
};

module.exports = {
  //param A : root node of tree
  //param B : integer
  //param C : integer
  //return an integer
  lca: function (root, n1, n2) {
    const path1 = [];
    const path2 = [];
    return findLCA(root, n1, path1, n2, path2);
  },
};
