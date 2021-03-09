class Node:
    def __init__(self,key):
        self.left = None
        self.right = None
        self.val = key


'''
A tree whose elements have at most 2 children is called a binary tree
* The maximum number of nodes at level ‘l’ of a binary tree is 2^l.
* The maximum number of nodes in a binary tree of height ‘h’ is 2^h – 1.  

FULL BINARY TREE
* A Binary Tree is a full binary tree if every node has 0 or 2 children.

COMPLETE BINARY TREE
* A Binary Tree is a Complete Binary Tree if all the levels are completely filled except possibly the last level and the last level has all keys as left as possible 

PERFECT BINARY TREE
*  A Binary tree is a Perfect Binary Tree in which all the internal nodes have two children and all leaf nodes are at the same level. 


'''
# ---------------------------------------------------------------------------- #
#                            To make a tree manually                           #
# ---------------------------------------------------------------------------- #
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