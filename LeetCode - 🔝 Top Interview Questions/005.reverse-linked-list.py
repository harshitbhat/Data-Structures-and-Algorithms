class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        prevNode = None
        currNode = head
        nextNode = None
        
        while currNode:
            nextNode = currNode.next
            currNode.next = prevNode
            prevNode = currNode
            currNode = nextNode
        
        head = prevNode
        
        return head