'''
Problem Link: https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1#
'''

class Solution:
    def addTwoLists(self, first, second):
        def reverse(head):
            prevNode = None
            currNode = head
            nextNode = None
            
            while currNode != None:
                nextNode = currNode.next
                currNode.next = prevNode
                prevNode = currNode
                currNode = nextNode
            
            head = prevNode
            return head
        
        l1 = reverse(first)
        l2 = reverse(second)
        
        t1 = l1
        t2 = l2
        digit = 0
        carry = 0
        newSum = t1.data + t2.data
        digit = newSum % 10
        carry = newSum // 10
        newNode = Node(digit)
        head = newNode
        t1 = t1.next
        t2 = t2.next
        while t1 and t2:
            newSum = t1.data + t2.data + carry
            tempNode = Node(newSum % 10)
            carry = newSum // 10
            newNode.next = tempNode
            newNode = tempNode
            t1 = t1.next
            t2 = t2.next
        while t1:
            newSum = t1.data + carry
            tempNode = Node(newSum % 10)
            carry = newSum // 10
            newNode.next = tempNode
            newNode = tempNode
            t1 = t1.next
        while t2:
            newSum = t2.data + carry
            tempNode = Node(newSum % 10)
            carry = newSum // 10
            newNode.next = tempNode
            newNode = tempNode
            t2 = t2.next
        
        if carry != 0:
            tempNode = Node(carry)
            newNode.next = tempNode
            
        return reverse(head)