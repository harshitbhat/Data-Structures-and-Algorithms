'''
Problem Link: https://practice.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1
'''

def isPalindrome(head):
    stk = []
    current = head
    while current:
        stk.append(current)
        current = current.next
    current = head
    while current and stk:
        if current.data == stk[-1].data:
            current = current.next
            stk.pop()
        else:
            break
    if stk:
        return False
    return True