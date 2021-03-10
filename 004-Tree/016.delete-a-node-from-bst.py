'''
Problem Link: https://practice.geeksforgeeks.org/problems/delete-a-node-from-bst/1
'''
def minNode(root):
    if root.left == None:
        return root
    return minNode(root.left)
    
def deleteNode(root, key):
    if root == None:
        return None
    if key < root.data:
        deleteNode(root.left,key)
    elif key > root.data:
        deleteNode(root.right,key)
    else:
        # With One or No Children
        if root.left == None:
            temp = root.right
            root = None
            return temp
        if root.right == None:
            temp = root.left
            root = None
            return temp
        
        # If it has two children
        temp = minNode(root.right)
        root.data = temp.data
        root.right = deleteNode(root.right,temp.data)
    
    return root