# ---------------------------------------------------------------------------- #
#                                   Recursive                                  #
# ---------------------------------------------------------------------------- #

def LCSlength(X,Y):
    if not X or not Y:
        return 0
    if X[0] == Y[0]:
        return 1 + LCSlength(X[1:],Y[1:])
    return max(LCSlength(X[1:],Y),LCSlength(X,Y[1:]))


X = 'ABCBDAB'
Y = 'BDCABA'

print(LCSlength(X,Y))

# ---------------------------------------------------------------------------- #
#                         Dynamic Programming Solution                         #
# ---------------------------------------------------------------------------- #

def lcsDP(X,Y):
    m = len(X)
    n = len(Y)

    dp = [[None for i in range(n+1)] for i in range(m+1)]

    for i in range(m+1):
        for j in range(n+1):
            if i == 0 or j == 0:
                dp[i][j] = 0
            elif X[i-1] == Y[j-1]:
                dp[i][j] = 1 + dp[i-1][j-1]
            else:
                dp[i][j] = max(dp[i-1][j],dp[i][j-1])
    
    return dp[m][n]

print(lcsDP(X,Y))