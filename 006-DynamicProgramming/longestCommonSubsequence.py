'''
Problem Link: https://practice.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1
'''
def lcs(m,n,X,Y):
    '''
    :param m: length of string X 
    :param n: length of string Y
    :param X: string X
    :param Y: string Y
    :return: Integer
    '''
    # code here
    dp = [[0 for i in range(n+1)] for i in range(m+1)]
    
    for i in range(1,m+1):
        for j in range(1,n+1):
            if X[i-1] == Y[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j],dp[i][j-1])
    return dp[m][n]