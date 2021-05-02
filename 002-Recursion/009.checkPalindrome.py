def isPalindrome(s,start,end):
    if start >= end:
        return True
    if s[start] != s[end]:
        return False
    return isPalindrome(s,start+1,end-1)

def main():
    s = 'axbca'
    ans = isPalindrome(s,0,len(s) - 1)
    print(ans)

if __name__ == '__main__':
    main()