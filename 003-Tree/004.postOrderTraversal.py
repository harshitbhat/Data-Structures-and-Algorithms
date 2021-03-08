class Node:
    def __init__(self,key):
        self.left = None
        self.right = None
        self.val = key

def postOrder(root):
    if root == None:
        return
    postOrder(root.left)
    postOrder(root.right)
    print(root.val,end=' ')

'''
        1
       / \
      2  3
     /    \
    5     9
         /
        7
'''

root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(5)
root.right.right = Node(9)
root.right.right.left = Node(7)


postOrder(root)
print()