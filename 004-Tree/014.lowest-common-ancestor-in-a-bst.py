'''
Problem Link: https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1
'''
def LCA(root, n1, n2):
    if root == None:
        return None
    if root.data > n1 and root.data > n2:
        return LCA(root.left,n1,n2)
    if root.data < n1 and root.data < n2:
        return LCA(root.right,n1,n2)
    return root
