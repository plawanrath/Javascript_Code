function bfs(graph, src) {
    let visited = new Array(graph.length).fill(false);
    let que = [];
    let res = [];
    que.unshift(src);
    while(que.length > 0) {
        let item = que.pop();
        if(!visited[item]) {
            res.push(item);
        }
        visited[item] = true;
        for(let j=0;j<graph.length;j++) {
            if(graph[item][j] === 1 && !visited[j]) {
                que.unshift(j);
            }
        }
    }
    return res;
}

function bfsPathFinder(graph, src, dst) {
    let visited = new Array(graph.length).fill(false);
    let que = [];
    let res = [];
    que.unshift(src);
    while(que.length > 0) {
        let item = que.pop();
        if(!visited[item]) {
            res.push(item);
        }
        if(item === dst) {
            return res;
        }
        visited[item] = true;
        for(let j=0;j<graph.length;j++) {
            if(graph[item][j] === 1 && !visited[j]) {
                que.unshift(j);
            }
        }
    }
    return null;
}

let sampleDirectedGraph = [
    [0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 0]
]

let sampleUndirectedGraph = [
    [0, 1, 1, 0, 0, 0],
    [1, 0, 0, 1, 1, 0],
    [1, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 0, 1, 1, 1, 0]
]

console.log(bfs(sampleDirectedGraph, 0));
console.log(bfs(sampleUndirectedGraph, 0));
console.log(bfsPathFinder(sampleDirectedGraph, 0, 4));