'''
Problem Link: https://practice.geeksforgeeks.org/problems/remove-duplicate-element-from-sorted-linked-list/1
'''
def removeDuplicates(head):
    current = head
    while current and current.next:
        if current.data == current.next.data:
            current.next = current.next.next
        else:
            current = current.next
    return head