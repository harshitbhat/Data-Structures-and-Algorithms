# Function prints the binary representation of a number
def fun(n):
    if n == 0:
        return
    fun(n//2)
    print(n % 2)

def main():
    fun(7)
    '''
    Output:
        1
        1
        1
    '''
    fun(10)
    '''
    Output:
        1
        0
        1
        0
    '''
if __name__ == '__main__':
    main()