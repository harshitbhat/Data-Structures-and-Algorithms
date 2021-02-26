'''
Problem Link: https://practice.geeksforgeeks.org/problems/count-nodes-of-linked-list/
'''
class Solution:
    def getCount(self, head_node):
        l = 0
        curr = head_node
        while curr:
            l += 1
            curr = curr.next
        return l