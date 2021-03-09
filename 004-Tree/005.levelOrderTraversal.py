class Node:
    def __init__(self,key):
        self.left = None
        self.right = None
        self.val = key

def levelOrder(root):
    if root == None:
        return 
    q = []
    q.append(root)
    while len(q) > 0:
        print(q[0].val,end=' ')
        temp = q.pop(0)
        if temp.left != None:
            q.append(temp.left)
        if temp.right != None:
            q.append(temp.right)
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


levelOrder(root)
print()