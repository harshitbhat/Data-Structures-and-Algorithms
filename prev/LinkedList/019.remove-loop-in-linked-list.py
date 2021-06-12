'''
Problem Link: https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1
'''
class Solution:
    def removeLoop(self, head):
        nodeHash = {}
        temp = head
        nodeHash[temp] = True
        while temp:
            if temp.next in nodeHash.keys():
                temp.next = None
            else:
                nodeHash[temp.next] = True
            temp = temp.next