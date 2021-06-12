'''
Checking the last Bit - Division Method
Time Complexity: O(number of bits)
'''
def countSetBitsDiv(n):
    ans = 0
    while n > 0:
        if n % 2 == 1:
            ans += 1
        n = n // 2

    return ans

'''
Checking the last Bit - Bitwise 
Time Complexity: O(number of bits)
'''
def countSetBitsBit(n):
    ans = 0
    while n > 0:
        # if n & 1 == 1:
        #     ans += 1
        #OR
        ans += n & 1
        n = n >> 1

    return ans


'''

# ---------------------------------------------------------------------------- #
#                        Brian and Kerningham Algorithm                        #
# ---------------------------------------------------------------------------- #

Time Complexity: O(number of set bits)
Operation, n = n & (n-1), resets the right most bit in n  
'''
def countSetBitsBKA(n):
    ans = 0
    while n > 0:
        n = n & (n-1)
        ans += 1
    return ans

#print(countSetBitsBKA(15))