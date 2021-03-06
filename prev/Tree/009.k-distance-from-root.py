'''
Problem Link: https://practice.geeksforgeeks.org/problems/k-distance-from-root/1#
'''
def KDistance(root,k):
    if root == None:
            return 0
    q = []
    ans = []
    q.append([root,0]) 
    while q:
        if q[0][1] == k:
            ans.append(q[0][0].data)
        n = q.pop(0)
        if n[0].left:
            q.append([n[0].left,n[1]+1])
        if n[0].right:
            q.append([n[0].right,n[1]+1])
    return ans

# Recursive Solution
def solve(root,k,ans):
    if root == None:
        return
    if k == 0:
        ans.append(root.data)
    else:
        solve(root.left,k-1,ans)
        solve(root.right,k-1,ans)
def KDistance2(root,k):
    ans = []
    solve(root,k,ans)
    return ans