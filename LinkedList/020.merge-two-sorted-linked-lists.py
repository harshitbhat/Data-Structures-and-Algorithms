'''
Problem Link: https://practice.geeksforgeeks.org/problems/merge-two-sorted-linked-lists/1#
'''
def sortedMerge(head_A, head_B):
    # Recursive Solution - Stack Overflow
    # temp = None
    # if head_A is None:
    #     return head_B
    # if head_B is None:
    #     return head_A
    
    # if head_A.data <= head_B.data:
    #     temp = head_A
    #     temp.next = sortedMerge(head_A.next,head_B)
    # else:
    #     temp = head_B
    #     temp.next = sortedMerge(head_A,head_B.next)

    # return temp
    
    temp = Node(0)
    tail = temp
    
    while True:
        if head_A == None:
            tail.next = head_B
            break
        if head_B == None:
            tail.next = head_A
            break
        if head_A.data <= head_B.data:
            tail.next = head_A
            head_A = head_A.next
        else:
            tail.next = head_B
            head_B = head_B.next
        tail = tail.next
    
    return temp.next