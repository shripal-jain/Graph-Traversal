class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        //Condition to prevent vertex override
        if(!this.adjacencyList[vertex])
        this.adjacencyList[vertex] = []
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            item => item != v2
        )
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            item => item != v1
        )
    }
    removeVertex(v){
        while(this.adjacencyList[v].length){
            const adjacencyVertex = this.adjacencyVertex[v].pop()
            this.removeEdge(v, adjacencyVertex)
        }
        delete this.adjacencyList[v]
    }
    depthFirstRecursive(start){
        let visited = {}
        let result = []
        const adjacencyList = this.adjacencyList;
        
        (function dfs(vertex){
            if(!vertex)
            return null
            visited[vertex]=true
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbor=>{
                if(!visited[neighbor]){
                    dfs(neighbor)
                }
            })
        })(start)

        return result
    }
}

//Initial Setup
let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g.depthFirstRecursive("A"))

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F