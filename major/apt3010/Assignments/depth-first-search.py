#function to perform depth first search
def dfs(graph, start, visited=None):
    #check if node has been visited
    #if it has not been visited set the set to be empty
    if visited is None:
        visited = set()
    #if it has been visited add start value
    visited.add(start)

    #print start
    print(start)

    for next in graph[start] - visited:
        dfs(graph, next, visited)
    return visited

#test data
graph = {'0': set(['1', '2']),
         '1': set(['0', '3', '4']),
         '2': set(['0']),
         '3': set(['1']),
         '4': set(['2', '3'])}

#call dfs
dfs(graph, '0')