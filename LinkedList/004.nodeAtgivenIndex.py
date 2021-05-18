'''
Problem Link: https://practice.geeksforgeeks.org/problems/node-at-a-given-index-in-linked-list/1
'''
def getNth(head, k):
    current = head
    pos = 1
    while pos != k:
        pos += 1
        current = current.next
    return current.data