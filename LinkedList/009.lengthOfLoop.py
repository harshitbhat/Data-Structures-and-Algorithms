'''
Problem Link: https://practice.geeksforgeeks.org/problems/find-length-of-loop/1
'''

def countNodesinLoop(head):
    one = head
    two = head.next
    while two and two.next and one != two:
        one = one.next
        two = two.next.next
    if two and two.next:
        L = 1
        current = two.next
        while current != two:
            current = current.next
            L += 1
        return L
    return 0