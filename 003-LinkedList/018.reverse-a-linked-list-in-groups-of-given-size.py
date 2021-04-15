'''
Problrm Link: https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1
'''

class Solution:
    def reverse(self,head, k):
        def findLast(start,k):
            temp = start
            c = 1
            while c != k:
                temp = temp.next
                c += 1
                if temp == None:
                    return None
            return temp
            
        cur = 1
        start = head
        end = findLast(start,k).next
        
        prevNode = None
        currNode = start
        nextNode = None
        
        while currNode != end:
            nextNode = currNode.next
            currNode.next = prevNode
            prevNode = currNode
            currNode = nextNode
        
        head = prevNode
        prevLast = findLast(head,k)
        
        while end:
            start = nextNode
            if findLast(start,k) == None:
                end = None
            else:
                end = findLast(start,k).next
            
            prevNode = None
            currNode = start
            nextNode = None
            
            while currNode != end:
                nextNode = currNode.next
                currNode.next = prevNode
                prevNode = currNode
                currNode = nextNode
            
            start = prevNode
            prevLast.next = start
            prevLast = findLast(start,k)
                
        return head