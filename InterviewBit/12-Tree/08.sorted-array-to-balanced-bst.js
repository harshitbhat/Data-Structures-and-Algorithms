// Definition for a binary tree node
// function TreeNode(data){
//        this.data = data
//        this.left = null
//        this.right = null
// }
function solve(arr, start, end) {
  if (start > end) {
    return null;
  }
  const mid = Math.floor((start + end) / 2);
  const root = new TreeNode(arr[mid]);
  root.val = arr[mid];
  root.left = solve(arr, start, mid - 1);
  root.right = solve(arr, mid + 1, end);
  return root;
}

module.exports = {
  /** * param A: list of integer
   *      return: root node of balanced BST
   */
  sortedArrayToBST: function (arr) {
    if (arr.length === 0) {
      return null;
    }
    const root = solve(arr, 0, arr.length - 1);
    return root;
  },
};
