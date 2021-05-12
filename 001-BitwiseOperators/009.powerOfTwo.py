# Naive Method
def powerOfTwoN(n):
    if n == 0:
        return False
    
    while n != 1:
        if n % 2 != 0:
            return False
        n = n // 2
    return True

# print(powerOfTwoN(514))


# Efficient, The number must have only one set bit

def powerOfTwo(n):
    if n == 0:
        return False
    return (n & (n-1)) == 0

print(powerOfTwo(40))