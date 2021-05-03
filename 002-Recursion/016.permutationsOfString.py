def swap(a, b):
    temp = a
    a = b
    b = temp

def permutations(s,i):
    if i == len(s) - 1:
        print(''.join(s))
        return
    
    for j in range(i,len(s)):
        s[i], s[j] = s[j], s[i]
        permutations(s, i+1)
        s[j], s[i] = s[i], s[j]


def main():
    s = 'ABC'
    permutations(list(s),0)

if __name__ == '__main__':
    main()