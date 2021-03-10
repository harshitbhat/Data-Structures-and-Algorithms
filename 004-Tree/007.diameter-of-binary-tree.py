'''
Problem Link: https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1
'''
class Solution:
    def diameter(self,root):
        '''
        O(n^2) solution - TLE
        def height(root):
            if root == None:
                return 0
            return 1 + max(height(root.left),height(root.right))
        def solve(root):
            if root == None:
                return 0
            return max(1 + height(root.left) + height(root.right), solve(root.left), solve(root.right))
        
        return solve(root)
        '''
        def height(root,ans):
            if root == None:
                return 0
            lHeight = height(root.left,ans)
            rHeight = height(root.right,ans)
            
            ans[0] = max(ans[0], 1 + lHeight + rHeight)
            return 1 + max(lHeight,rHeight)
        if root == None:
            return 0
        ans = [-9999999999]
        height_store = height(root,ans)
        return ans[0]