# Function is generationg Power of 2 <= n => gives index
def fun(n):
    if n == 1:
        return 0
    return 1 + fun(n//2)

def main():
    val = fun(16)
    print(val)
    '''
    Output: 
        4
    '''

if __name__ == '__main__':
    main()