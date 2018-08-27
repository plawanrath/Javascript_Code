//Naive Dijkistra's implementation running time O(n2)

//We can do this better by implementing Dijkistra's using a min Heap which will hold vertices basd on priority
//We build the heap and then since its a min heap we will always get the root element of heap and then 
//check all edges to adjust min weights, and wherever you end up adjusting weights, decrease their priority and so on.
//This implementation will be O(E log V)

function dijkistra(graph, src) {
    //stores shortest distances from src to i
    let distances = new Array(graph.length).fill(Number.MAX_VALUE);
    let shortestPaths = new Array(graph.length).fill(false);

    distances[src] = 0;
    for(let i=0;i<graph.length-1;i++) {
        //getting min distance vertex from set of
        //vertices not yet processessed.
        let u = minDistance(distances, shortestPaths);
        //mark picked vertex as processessed
        shortestPaths[u] = true;
        //adjust distances of its neighbors
        for(let v = 0; v < graph.length; v++) {
            if(!shortestPaths[v] && graph[u][v] != 0 &&
            distances[u] < Number.MAX_VALUE && (distances[u] + graph[u][v] < distances[v])) {
                distances[v] = distances[u] + graph[u][v];
            }
        }
    }
    return distances;
}

function minDistance(distances, paths) {
    let min = Number.MAX_VALUE;
    let minIndex = -1;
    for(let i=0;i<distances.length;i++) {
        if(!paths[i] && distances[i] <= min) {
            min = distances[i];
            minIndex = i;
        }
    }
    return minIndex;
}

let graph = [[0, 3, 4], [0, 0, 2], [1, 0, 0]];
console.log(dijkistra(graph, 1));