'''
Problem Link: https://practice.geeksforgeeks.org/problems/find-a-pair-with-given-target-in-bst/1
'''
def inOrder(root,travel):
    if root == None:
        return
    inOrder(root.left,travel)
    travel.append(root.data)
    inOrder(root.right,travel)
    
def isPairPresent(root, target): 
    arr = []
    inOrder(root,arr)
    
    h = {}
    for i in arr:
        h[i] = True
        
    for i in h:
        if (target - i) in h.keys():
            return 1
    return 0