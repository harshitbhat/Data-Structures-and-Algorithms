'''
Method 1 - Left Shift Operator
 - Take a number which has only kth bit as set, rest as 0
 - (&) this number with the given number
 - If result is != 0, this means that the bit in original number was set
 - else it means that the bit in original number was not set.
'''

def isKthBitSetLS(n,k):
    if( n & (1 << (k-1))):
        print('YES, kth bit is set')
    else:
        print('NO, kth bit is not set')

#isKthBitSetLS(5,3)


'''
Method 1 - Right Shift Operator
 - Right shift the kth bit in the given number to right most bit
 - (&) this number with 1
 - If the result is 0, it means that the bit was not set
'''
def isKthBitSetRS(n,k):
    if( 1 & (n >> (k-1))):
        print('YES, kth bit is set')
    else:
        print('NO, kth bit is not set')

isKthBitSetRS(5,3)