class Node:
    def __init__(self,key):
        self.left = None
        self.right = None
        self.val = key

def inOrder(root):
        if root == None:
                return
        inOrder(root.left)
        print(root.val,end=' ')
        inOrder(root.right)


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


inOrder(root)
print()