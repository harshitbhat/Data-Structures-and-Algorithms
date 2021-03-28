# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        first = head
        if head == None:
            return False
        second = head.next
        while second and second.next and first != second:
            first = first.next
            second = second.next.next
        if second and second.next:
            return True
        return False