'''
Problem Link: https://practice.geeksforgeeks.org/problems/finding-middle-element-in-a-linked-list/
'''

def findMid(head):
    # return the value stored in the middle node
    one = head
    two = head.next
    while two and two.next:
        one = one.next
        two = two.next.next
    if two:
        return one.next.data
    return one.data