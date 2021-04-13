# Time Complexity: O(n)
def powerN(x,y):
    res = 1
    for i in range(y):
        res *= x
    
    return res

# print(powerN(2,5))
# print(powerN(8,0))

# Log n soution

def powerR(x,y):
    if y == 0:
        return 1
    temp = powerR(x,y//2)
    temp = temp * temp
    if y % 2 == 0:
        return temp
    else:
        return temp * x

#print(powerR(3,5))


# Iterative Power (Binary Exponentiation)
# Time Complexity - O(log n) 
# Space Complexity - O(n)

def power(x,y):
    res = 1
    while y > 0:
        if y % 2 != 0: # can be written as y & 1
            res = res * x
        x = x * x
        y = y // 2 # shift operator can also be used
    
    return res

print(power(4,5))
'''
Express y as binary and multiply with power of x when bit is one
'''