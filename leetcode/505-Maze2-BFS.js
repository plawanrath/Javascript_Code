function shortestDistance(maze, start, destination) {
    let distance = new Array(maze.length);
    let moves = [[0,1], [0,-1], [1, 0], [-1, 0]];
    for(let i=0;i<maze.length;i++) {
        distance[i] = new Array(maze[0].length).fill(Number.MAX_VALUE);
    }
    let q = [];
    q.unshift(start);
    distance[start[0]][start[1]] = 0;
    while(q.length > 0) {
        let pos = q.pop();
        for(let move of moves) {
            let count = 0;
            let x = pos[0] + move[0];
            let y = pos[1] + move[1];
            while(x >= 0 && x < maze.length && y >= 0 && y < maze[0].length && maze[x][y] === 0) {
                x = x + move[0];
                y = y + move[1];
                count++;
            }
            x = x - move[0];
            y = y - move[1];
            if(distance[pos[0]][pos[1]] + count < distance[x][y]) {
                let point = [x, y];
                distance[x][y] = distance[pos[0]][pos[1]] + count;
                q.unshift(point);
            }
        }
    }
    return distance[destination[0]][destination[1]] !== Number.MAX_VALUE ? 
        distance[destination[0]][destination[1]] : -1;
}

let maze = [
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0]   
]
let start = [0, 4];
let dst = [4, 4];

console.log(shortestDistance(maze, start, dst));