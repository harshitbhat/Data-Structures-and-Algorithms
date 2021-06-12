# Naive - O(n^2) - Two for loops and calculate count for every element.

'''
Efficient -  O(n)
- Take XOR of all elements, will give XOR of two odd appearing numbers
- consider a set bit and divide the array into two groups, ad bits should be different
- Take XOR of all in two groups and we get the result.
'''

def twoOddOccuring(arr):
    xor = 0
    res1 = res2 = 0

    # XOR of all the numbers - XOR of two odd appearing numbers
    for i in arr:
        xor = xor ^ i
    
    sn = xor & (~(xor - 1))
    '''
                3 - 0000...011
            (3-1) - 0000...010
           ~(3-1) - 1111...101 

    3 & ~(3-1) = 0000....001 (All bits as zero except last bit of original XOR)

                8 - 000..001000
               32 - 000..100000

               8 ^ 32 = 40

            40 = 000....0101000
      (40 - 1) = 000....0100111
     ~(40 - 1) = 111....1011000

    40 & ~(40 - 1) = 0000...1000 (Only right most bit of XOR is set in this result)

    '''

    for num in arr:
        if num & sn != 0:
            res1 = res1 ^ num
        else:
            res2 = res2 ^ num
    
    return [res1,res2]


arr = [3,4,3,4,8,4,4,32,7,7]

print(twoOddOccuring(arr))