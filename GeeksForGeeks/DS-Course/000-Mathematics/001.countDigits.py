# Time Complexity: O(d)
def countDigits(n):
    temp = n
    ans = 0
    while temp:
        temp = temp // 10
        ans += 1
    return ans

print(countDigits(12345))