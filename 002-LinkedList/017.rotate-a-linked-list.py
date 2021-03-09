'''
Problem Link: https://practice.geeksforgeeks.org/problems/rotate-a-linked-list/1#
'''
class Solution:
    def rotate(self, head, k):
        # Check for k == n
        length = 0
        temp = head
        while temp != None:
            temp = temp.next
            length += 1
        if length == k:
            return head
        # iterate till k
        temp = head
        cur = 1
        while cur != k:
            temp = temp.next
            cur += 1
        # assign the new head as next element of k
        new = head
        head = temp.next
        temp = head
        # add previous nodes to end of the list
        while temp.next != None:
            temp = temp.next
        temp.next = new
        cur = 1
        temp = new
        while k != cur:
            temp = temp.next
            cur += 1
        temp.next = None
        temp = head
        return head