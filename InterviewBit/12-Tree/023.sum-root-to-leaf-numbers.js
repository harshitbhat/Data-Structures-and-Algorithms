// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return an integer
  sumNumbers: function (root) {
    let ans = 0;
    const MOD = 1003;

    function solve(root, sum) {
      if (!root) return;

      sum = (sum * 10 + root.data) % MOD;

      if (!root.left && !root.right) {
        ans += sum;
        return;
      }
      solve(root.left, sum);
      solve(root.right, sum);
    }

    solve(root, 0);

    return ans % MOD;
  },
};
