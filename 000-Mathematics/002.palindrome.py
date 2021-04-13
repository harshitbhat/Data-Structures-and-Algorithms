# Time Complexity: O(d)
def reverse(n):
    rev = 0
    temp = n
    while temp:
        rev = rev * 10 + temp % 10
        temp = temp // 10
    return rev

def isPalindrome(n):
    return n == reverse(n)

print(isPalindrome(8008))