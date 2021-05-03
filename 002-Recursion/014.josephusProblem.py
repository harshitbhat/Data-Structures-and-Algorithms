'''
    Recurrance Relation: T(n) = T(n-1) + O(c)
    Time Complexity: O(n)
'''

# Positions begin from 0
# If position begins from 1, add 1 to the final result returned by the function
def josephusProblem(n,k):
    if n == 1:
        return 0
    return (josephusProblem(n-1,k) + k ) % n

def main():
    ans = josephusProblem(7,4)
    print(ans)
if __name__ == '__main__':
    main()