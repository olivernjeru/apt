# Python program to print DFS traversal from a given graph
from collections import defaultdict

# Directed graph using adjacency list representation
class Graph:

    def __init__(self,vertices):

        # No. of vertices
        self.V = vertices

        # default dictionary to store graph
        self.graph = defaultdict(list)

    # add an edge to graph
    def addEdge(self,u,v):
        self.graph[u].append(v)

    # Perform a Depth-Limited search from given source 'src'
    def DLS(self,src,target,maxDepth):

        if src == target : return True

        # stop recursing.
        if maxDepth <= 0 :
            return False

        # Recur for all the vertices adjacent to this vertex
        for i in self.graph[src]:
                if(self.DLS(i,target,maxDepth-1)):
                    return True
        return False

    # Search if target is reachable from v by using recursive DLS()
    def IDDFS(self,src, target, maxDepth):

        # Repeatedly depth-limit search till the maximum depth is reached
        for i in range(maxDepth):
            if (self.DLS(src, target, i)):
                return True
        return False

# A graph given for testing
g = Graph (7);
g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 3)
g.addEdge(1, 4)
g.addEdge(2, 5)
g.addEdge(2, 6)

target = 6; maxDepth = 3; src = 0

if g.IDDFS(src, target, maxDepth) == True:
    print ("Target is reachable from source " +
        "within max depth")
else :
    print ("Target is NOT reachable from source " +
        "within max depth")
