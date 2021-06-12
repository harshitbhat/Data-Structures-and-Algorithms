class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        def solve(root): 
            if root == None:
                return 0
            return 1 + max(solve(root.left),solve(root.right))
        return solve(root)