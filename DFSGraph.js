function dfs(graph, start) {
    visited[start] = true;
    res.push(start);
    for(let j=0;j<graph.length;j++) {
        if(graph[start][j] === 1 && !visited[j]) {
            dfs(graph, j);
        }
    }
}

function dfsConnectedComponents(graph, start, nocc) {
    visited[start] = true;
    for(let j=0;j<graph.length;j++) {
        if(graph[start][j] === 1 && !visited[j]) {
            dfs(graph, j);
            nocc++;
        }
    }
    return nocc;
}

function dfsSpanningTree(graph, start) {
    let stack = [];
    let res = [];
    let visited = new Array(graph.length).fill(false);
    stack.push(start);
    while(stack.length > 0) {
        let item = stack.pop();
        if(visited[item]) {
            return res;
        }
        visited[item] = true;
        res.push(item);
        for(let j=0;j<graph.length;j++) {
            if(graph[item][j] === 1 && !visited[j]) {
                stack.push(j);
            }
        }
    }
    return res;
}

function dfsPathFinder(graph, src, dst) {
    let stack = [];
    let res = [];
    let visited = new Array(graph.length).fill(false);
    stack.push(src);
    while(stack.length > 0) {
        let item = stack.pop();
        if(item === dst && !visited[item]) {
            res.push(item);
            return res;
        }
        visited[item] = true;
        res.push(item);
        for(let j=0;j<graph.length;j++) {
            if(graph[item][j] === 1 && !visited[j]) {
                stack.push(j);
            }
        }
    }
    return null;
}

let sampleDirectedGraph = [
    [0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 0]
]
let visited = new Array(sampleDirectedGraph.length).fill(false);
let res = [];
dfs(sampleDirectedGraph, 0);
console.log(res);

let sampleUndirectedGraph = [
    [0, 1, 1, 0, 0, 0],
    [1, 0, 0, 1, 1, 0],
    [1, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 0, 1, 1, 1, 0]
]

let sampleGraphNotConnected = [
    [0, 1, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 0]
]

visited = new Array(sampleUndirectedGraph.length).fill(false);
res = [];
dfs(sampleUndirectedGraph, 0);
console.log(res);

console.log(dfsSpanningTree(sampleUndirectedGraph, 0));
console.log(res);

console.log(dfsPathFinder(sampleUndirectedGraph, 2, 4));

console.log(dfsPathFinder(sampleDirectedGraph, 0, 3));

visited = new Array(sampleUndirectedGraph.length).fill(false);
console.log(dfsConnectedComponents(sampleGraphNotConnected, 0, 1));