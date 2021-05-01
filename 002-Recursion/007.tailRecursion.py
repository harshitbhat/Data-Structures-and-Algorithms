'''
Tail Recursion is when recursive call is the last call, a function has to do.
It is faster than other recursive functions, like fun1 below.
Some normal recursion functions can be converted to Tail Recursion functions (fun2)
But not all.
Quick Sort is tail recursive
Merge Sort is not.
That is why Quick Sort works faster than Merge Sort
'''
def fun1(n):
    if n == 0:
        return
    fun1(n-1)
    print(n)


# Pass K as 1
def fun2(n,k):
    if n == 0:
        return
    print(k)
    fun2(n-1,k+1)


def main():
    fun1(5)
    fun2(6,1)


if __name__ == '__main__':
    main()