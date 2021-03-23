# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        temp = headA
        myHash = {}
        while temp:
            myHash[temp] = 1
            temp = temp.next
        temp = headB
        while temp:
            if temp in myHash:
                return temp
            temp = temp.next
        return None