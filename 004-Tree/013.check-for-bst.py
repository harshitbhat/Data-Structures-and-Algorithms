'''
Practice Problem: https://practice.geeksforgeeks.org/problems/check-for-bst/1
'''
class Solution:
    def isBST(self, root):
        def isSorted(arr):
            for i in range(0,len(arr) - 1):
                if arr[i] >= arr[i+1]:
                    return False
            return True
            
        def inOrder(root,travel):
            if root == None:
                return
            inOrder(root.left,travel)
            travel.append(root.data)
            inOrder(root.right,travel)
            
            
        traversal = []
        inOrder(root,traversal)
        return isSorted(traversal)