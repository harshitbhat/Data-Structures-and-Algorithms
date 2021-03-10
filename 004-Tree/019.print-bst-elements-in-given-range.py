'''
Problem Link: https://practice.geeksforgeeks.org/problems/print-bst-elements-in-given-range/1
'''
def solve(root,low,high,arr):
    if root == None:
        return
    if low < root.data:
        solve(root.left,low,high,arr)
    if low <= root.data and root.data <= high:
        arr.append(root.data)
    if root.data < high:
        solve(root.right,low,high,arr)
        

def printNearNodes(root, low, high):
    arr = []
    solve(root,low,high,arr)
    return arr