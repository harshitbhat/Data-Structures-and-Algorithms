# Question: https://practice.geeksforgeeks.org/problems/tower-of-hanoi-1587115621/1/?track=DSASP-Recursion&batchId=154#

class Solution:
    def toh(self, N, fromm, to, aux):
        def towerOfHanoi(N, fromm, to, aux):
            if N == 1:
                #print(f'move disk {N} from rod {fromm} to rod {to}')
                print('move disk ' + str(N) + ' from rod ' +  str(fromm) +  ' to rod ' +  str(to))
                return
            towerOfHanoi(N - 1, fromm, aux, to)
            print('move disk ' + str(N) + ' from rod ' +  str(fromm) +  ' to rod ' +  str(to))
            #print(f'move disk {N} from rod {fromm} to rod {to}')
            towerOfHanoi(N - 1, aux, to, fromm)
        towerOfHanoi(N, fromm, to, aux)
        return (2 ** N - 1)