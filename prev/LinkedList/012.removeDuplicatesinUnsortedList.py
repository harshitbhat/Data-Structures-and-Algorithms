'''
Problem Link: https://practice.geeksforgeeks.org/problems/remove-duplicates-from-an-unsorted-linked-list/1
'''
class Solution:
    def removeDuplicates(self, head):
        myHash = {}
        current = head
        myHash[current.data] = True
        while current and current.next:
            if current.next.data not in myHash.keys():
                myHash[current.next.data] = True
                current = current.next
            else:
                current.next = current.next.next
        return head