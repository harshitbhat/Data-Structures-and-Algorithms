'''
Problem Link: https://practice.geeksforgeeks.org/problems/insert-a-node-in-a-bst/1
'''
def insert(root, key):
    # code here
    if root == None:
        return Node(key)
    if root.data == key:
        return root
    elif root.data < key:
        root.right = insert(root.right,key)
    else:
        root.left = insert(root.left,key)
    return root