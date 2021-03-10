'''
Problem Link: https://practice.geeksforgeeks.org/problems/find-k-th-smallest-element-in-bst/1
'''
def inOrder(root,travel):
    if root == None:
        return
    inOrder(root.left,travel)
    travel.append(root.data)
    inOrder(root.right,travel)
    
def KthSmallestElement(root, k): 
    ans = []
    inOrder(root,ans)
    if k > len(ans):
        return -1
    return ans[k-1]