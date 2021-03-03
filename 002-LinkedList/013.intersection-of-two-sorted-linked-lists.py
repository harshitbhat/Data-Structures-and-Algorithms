'''
Problem Link: https://practice.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/1
'''
def findIntersection(head1,head2):
    #return head
    ll = linkedList()
    temp1 = head1
    temp2 = head2
    while temp1 and temp2:
        if temp1.data < temp2.data:
            temp1 = temp1.next
        elif temp1.data > temp2.data:
            temp2 = temp2.next
        else:
            ll.insert(temp1.data)
            temp1 = temp1.next
            temp2 = temp2.next

    return ll.head