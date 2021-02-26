'''
Problem Link: https://practice.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1
'''
def getNthFromLast(head,n):
    L = 0
    current = head
    while current:
        L += 1
        current = current.next
    if n > L:
        return -1
    pos = 1
    current = head
    while pos != L - n + 1 and current:
        pos += 1
        current = current.next
    return current.data