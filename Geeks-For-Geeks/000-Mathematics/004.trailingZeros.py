# Naive Solution, calculate factorial and count zeroes
# will not work for large numbers, in some languages, will cause overflow
# Time Complexity: O(n)

def countZeroesN(n):
    fact = 1
    for i in range(1,n+1):
        fact *= i
    
    ans = 0
    while fact % 10 == 0:
        ans += 1
        fact = fact // 10
    
    return ans

print(countZeroesN(100))

# Better Solution, count number of factors of powers of 5, till it is less than n
# Time Complexity: O(log n)
def countZeroes(n):
    ans = 0
    i = 5
    while i <= n:
        ans += n // i
        i *= 5

    return ans

print(countZeroes(100))