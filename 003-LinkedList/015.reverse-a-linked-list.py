'''
Problem Link: https://practice.geeksforgeeks.org/problems/reverse-a-linked-list/1
'''
class Solution:
    def reverseList(self, head):
        prevNode = None
        currNode = head
        nextNode = None
        
        while currNode != None:
            nextNode = currNode.next
            currNode.next = prevNode
            prevNode = currNode
            currNode = nextNode
        
        head = prevNode
        return head