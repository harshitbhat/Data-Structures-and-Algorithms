'''
Problem Link: https://practice.geeksforgeeks.org/problems/delete-a-node-in-single-linked-list/1
'''
def delNode(head, k):
    if k == 1:
        head = head.next
        return head
    current = head
    pos = 1
    while pos + 1 != k:
        pos += 1
        current = current.next
    current.next = current.next.next
    return head