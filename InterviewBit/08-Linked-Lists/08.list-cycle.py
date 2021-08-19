# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    # @param A : head node of linked list
    # @return the first node in the cycle in the linked list

    def getPointer(self,A):
        first = A
        second = A

        while second and second.next:
            first = first.next
            second = second.next.next

            if first == second:
                return first

        return None

    def detectCycle(self, A):
        
        pointer = self.getPointer(A)

        if pointer is None:
            return None

        while pointer != A:
            pointer = pointer.next
            A = A.next
        
        return pointer
            