'''
Problem Link: https://practice.geeksforgeeks.org/problems/delete-without-head-pointer/1
'''

class Solution:
    def deleteNode(self,node):
        if node.next == None:
            node = None
        else:
            node.data = node.next.data
            node.next = node.next.next