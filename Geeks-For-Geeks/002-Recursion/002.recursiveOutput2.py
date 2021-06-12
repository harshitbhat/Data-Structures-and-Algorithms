def fun(n):
    if n == 0:
        return
    fun(n-1)
    print(n)
    fun(n-1)


def main():
    fun(3)
    '''
    Output is :
        1
        2
        1
        3
        1
        2
        1
    '''

if __name__ == '__main__':
    main()