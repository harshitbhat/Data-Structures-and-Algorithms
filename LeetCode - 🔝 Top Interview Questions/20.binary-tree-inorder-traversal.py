# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        def inOrder(root,ans):
            if root == None:
                return
            inOrder(root.left,ans)
            ans.append(root.val)
            inOrder(root.right,ans)
        ans = []
        inOrder(root,ans)
        return ans