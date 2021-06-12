'''
Problem link: https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1
'''
class Solution:
    def detectLoop(self, head):
        #code here
        one = head
        two = head.next
        while two and two.next and one != two:
            one = one.next
            two = two.next.next
        if two and two.next != None:
            return True
        return False