from collections import defaultdict

class Graph:
    def __init__(self):
        self.graph = defaultdict(list)
    
    def insertEdge(self,v1,v2):
        self.graph[v1].append(v2)
        # For Undirected graph, add,
        # self.graph[v2].append(v1)
    
    def printGraph(self):
        for node in self.graph:
            print(node,' -> ',end='')
            for v in self.graph[node]:
                print(v,end=' ')
            print()

g = Graph()

'''
Assume directed:
1 -> 2, 3
2 -> 3
4 -> 5
5 -> 2
1 - 2 - 5
| /     |
3       4
'''

g.insertEdge(1,2)
g.insertEdge(1,3)
g.insertEdge(2,3)
g.insertEdge(4,5)
g.insertEdge(5,2)

g.printGraph()