def intersetPoint(head1,head2):
    #code here
    '''
    # O(m*n) solution
    temp = None
    pointer1 = head1
    found = False
    while pointer1:
        pointer2 = head2
        while pointer2:
            if pointer1 == pointer2:
                found = True
                break
            pointer2 = pointer2.next
        if found:
            break
        pointer1 = pointer1.next
    
    if found:
        return pointer1.data
    return -1
    '''
    temp = head1
    myHash = {}
    while temp:
        myHash[temp] = 1
        temp = temp.next
    temp = head2
    while temp:
        if temp in myHash:
            return temp.data
        temp = temp.next
    return -1