from collections import defaultdict

class Graph:
    def __init__(self):
        self.graph = defaultdict(list)
    
    def insertEdge(self,v1,v2):
        self.graph[v1].append(v2)
    
    def DFS(self,startNode):
        visited = set()
        stk = []

        stk.append(startNode)

        while stk:
            curr = stk.pop()

            if curr not in visited:
                print(curr, end=' ')
                visited.add(curr)
            
            for node in self.graph[curr]:
                if node not in visited:
                    stk.append(node)


g = Graph()

g.insertEdge(0,1)
g.insertEdge(0,3)
g.insertEdge(1,2)
g.insertEdge(1,5)
g.insertEdge(1,4)
g.insertEdge(2,3)
g.insertEdge(2,5)
g.insertEdge(3,6)
g.insertEdge(4,7)
g.insertEdge(5,7)
g.insertEdge(5,6)
g.insertEdge(5,8)
g.insertEdge(6,9)
g.insertEdge(7,8)
g.insertEdge(8,9)

g.DFS(1)

