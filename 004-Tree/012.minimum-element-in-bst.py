'''
Problem Link: https://practice.geeksforgeeks.org/problems/minimum-element-in-bst/1
'''
def minValue(root):
    if root.left == None:
        return root.data
    return minValue(root.left)