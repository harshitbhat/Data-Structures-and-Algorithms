'''
Problem Link: https://practice.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1
'''
class Solution:
    def segregate(self, head):
        countData = [0,0,0]
        temp = head
        while temp:
            if temp.data == 0:
                countData[0] += 1
            if temp.data == 1:
                countData[1] += 1
            if temp.data == 2:
                countData[2] += 1
            temp = temp.next
        temp = head
        while countData[0] != 0:
            temp.data = 0
            countData[0] -= 1
            temp = temp.next
        while countData[1] != 0:
            temp.data = 1
            countData[1] -= 1
            temp = temp.next
        while countData[2] != 0:
            temp.data = 2
            countData[2] -= 1
            temp = temp.next
        return head