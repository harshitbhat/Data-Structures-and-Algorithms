class Graph:
    def __init__(self,numberOfNodes):
        self.numberOfNodes = numberOfNodes + 1
        self.graph = [[0 for x in range(numberOfNodes + 1)] for y in range(numberOfNodes + 1)]
    
    def withinBounds(self,v1,v2):
        return v1 >= 0 and v1 <= self.numberOfNodes and v2 >=0 and v2 <= self.numberOfNodes
    
    def insertEdge(self,v1,v2):
        if self.withinBounds(v1,v2):
            self.graph[v1][v2] = 1
            # If undirected, add:
            # self.graph[v2][v1] = 1
    
    def printGraph(self):
        for i in range(1,self.numberOfNodes):
            print(i , ' -> ', end='')
            for j in range(1,self.numberOfNodes):
                if self.graph[i][j]:
                    print(j, end=' ')
            print()

g = Graph(5)

g.insertEdge(1,2)
g.insertEdge(1,3)
g.insertEdge(2,3)
g.insertEdge(4,5)
g.insertEdge(5,2)

g.printGraph()

    
