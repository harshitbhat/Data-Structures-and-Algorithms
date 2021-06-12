# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        stk = []
        current = head
        while current:
            stk.append(current)
            current = current.next
        current = head
        while current and stk:
            if current.val == stk[-1].val:
                current = current.next
                stk.pop()
            else:
                break
        if stk:
            return False
        return True