'''
Problem Link: https://practice.geeksforgeeks.org/problems/ancestors-in-binary-tree/1
'''

def solve(root,target,ans):
    if root == None:
        return False
        
    if root.data == target:
        return True
        
    if solve(root.left,target,ans) or solve(root.right,target,ans):
        ans.append(root.data)
        return True

    return False
    
def Ancestors(root,target):
    ans = []
    solve(root,target,ans)
    return ans