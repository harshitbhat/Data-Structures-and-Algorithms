'''
Problem Link: https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1
'''
class Solution:
    def height(self, root):
        def solve(root):
            if root == None:
                return 0
            return 1 + max(solve(root.left),solve(root.right))
        return solve(root)