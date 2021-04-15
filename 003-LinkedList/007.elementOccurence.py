'''
Problem Link: https://practice.geeksforgeeks.org/problems/occurence-of-an-integer-in-a-linked-list/1
'''
class Solution:
    def count(self, head, search_for):
        ans = 0
        current = head
        while current:
            if current.data == search_for:
                ans += 1
            current = current.next
        return ans