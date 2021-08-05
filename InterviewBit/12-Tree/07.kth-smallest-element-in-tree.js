// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

const inOrder = (root, arr) => {
  if (!root) {
    return;
  }
  inOrder(root.left, arr);
  arr.push(root.data);
  inOrder(root.right, arr);
};

module.exports = {
  //param A : root node of tree
  //param B : integer
  //return an integer
  kthsmallest: function (root, k) {
    const arr = [];
    inOrder(root, arr);
    // console.log(arr);
    return arr[k - 1];
  },
};
