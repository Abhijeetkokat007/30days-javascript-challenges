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

    
    findShortestPath(startingVertex, targetVertex) {
        if (!this.adjacencyList.has(startingVertex) || !this.adjacencyList.has(targetVertex)) {
            console.log("One or both vertices not found in the graph.");
            return null;
        }

        const visited = new Set();
        const queue = [[startingVertex]];  
        while (queue.length > 0) {
            const path = queue.shift();
            const currentVertex = path[path.length - 1];

            if (currentVertex === targetVertex) {
                return path;  
            }

            if (!visited.has(currentVertex)) {
                visited.add(currentVertex);

                const neighbors = this.adjacencyList.get(currentVertex);
                for (let neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        const newPath = [...path, neighbor];
                        queue.push(newPath);  
                    }
                }
            }
        }

        return null;  
    }
}


const graph = new Graph();


graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');


graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');


const shortestPath = graph.findShortestPath('A', 'F');
console.log("Shortest path from A to F:", shortestPath);  
