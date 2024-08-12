class Graph {
    constructor() {
        this.adjacencyList = new Map();  
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);  
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.adjacencyList.get(vertex1).push(vertex2);  
        this.adjacencyList.get(vertex2).push(vertex1);  
    }

   
    bfs(startingVertex) {
        if (!this.adjacencyList.has(startingVertex)) {
            console.log("Vertex not found in the graph.");
            return;
        }

        const visited = new Set();  
        const queue = [startingVertex];  

        while (queue.length > 0) {
            const currentVertex = queue.shift();  
            if (!visited.has(currentVertex)) {
                console.log(currentVertex);  
                visited.add(currentVertex);  

                const neighbors = this.adjacencyList.get(currentVertex);
                for (let neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor);  
                    }
                }
            }
        }
    }
}


const graph = new Graph();


graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');


console.log("BFS starting from vertex A:");
graph.bfs('A');  