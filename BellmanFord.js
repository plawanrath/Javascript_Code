/**
 * Given a graph and a source vertex src, find the shortest path from source
 * to all vertices in the given graph. The graph can contain negative weighted 
 * edges.
 * 
 * Dijkistra's algorithm solves this problem in O(V log V) time but doesn't work
 * for graphs with negative edge weights. Bellman Ford algorithm however can work
 * for graphs having negative edge weights. Although its running time is O(V3)
 */

function bellmanFord(graph, src) {
    let distances = new Array(graph.length).fill(Number.MAX_VALUE);
    distances[src] = 0;
    for(let k=0;k<graph.length-1;k++) {
        for(let i=0;i<graph.length;i++) {
            for(let j=0;j<graph[0].length;j++) {
                if(distances[i] > distances[j] + graph[j][i]) {
                    distances[i] = distances[j] + graph[j][i];
                }
            }
        }
    }
    return distances;
}

function bellmanFordNegativeCycles(graph, src) {
    let distances = new Array(graph.length).fill(Number.MAX_VALUE);
    distances[src] = 0;
    for(let k=0;k<graph.length-1;k++) {
        for(let i=0;i<graph.length;i++) {
            for(let j=0;j<graph[0].length;j++) {
                if(distances[i] > distances[j] + graph[j][i]) {
                    distances[i] = distances[j] + graph[j][i];
                }
            }
        }
    }
    for(let i=0;i<graph.length;i++) {
        for(let j=0;j<graph[0].length;j++) {
            if(distances[i] > distances[j] + graph[j][i]) {
                return true; //has negative cycle
            }
        }
    }
    return false;    
}

graph = [[0,3,4],[0,0,2],[0,-2,0]]
src = 0;
graphNegCycle = [[0, 3, 4], [0, 0, -2], [0, -2, 0]];
console.log(bellmanFord(graph, src));
console.log(bellmanFordNegativeCycles(graphNegCycle, src));