# ---------------------------------------------------------------------------- #
#                   Maximum Connected 1's in a binary matrix                   #
# ---------------------------------------------------------------------------- #
def getVal(mat,i,j,rowMax,colMax):
    if i < 0 or i >= rowMax or j < 0 or j >= colMax:
        return 0
    return mat[i][j]

def findMaxBlock(mat,r,c,maxRow,maxCol,size):
    global maxSize
    global countArr
    if r >= rowMax or c >= colMax:
        return
    countArr[r][c] = 1
    size += 1
    maxSize = max(size,maxSize)
    direction = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
    for point in direction:
        newi = r + point[0]
        newj = c + point[1]
        val = getVal(mat,newi,newj,rowMax,colMax)
        if val > 0 and countArr[newi][newj] == 0:
            findMaxBlock(mat,newi,newj,rowMax,colMax,size)
    countArr[r][c] = 0

def getMaxOnes(mat,rowMax,colMax):
    global maxSize
    global size
    global countArr
    for i in range(0,rowMax):
        for j in range(0,colMax):
            if mat[i][j] == 1:
                findMaxBlock(mat,i,j,rowMax,colMax,0)
    return maxSize
matrix1 = [[1,0,0,1],[0,0,1,1],[0,1,1,1],[1,1,1,1],[0,1,0,0]]
matrix2 = [[1,1,0,0,0],[0,1,1,0,1],[0,0,0,1,1],[1,0,0,1,1],[0,1,0,1,1]]
matrix3 = [[1,1,0,0,0],[0,1,1,0,0],[0,0,1,0,1],[1,0,0,0,1],[0,1,0,1,1]]

matrix = matrix1
rowMax = len(matrix)
colMax = len(matrix1[0])
maxSize = 0
size = 0
countArr = [[0 for i in range(colMax)] for j in range(rowMax)]
print(f'Maximum numbers of 1\'s are : {getMaxOnes(matrix,rowMax,colMax)}')

