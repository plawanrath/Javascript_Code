/*
There is a ball in a maze with empty spaces and walls. The ball can go through empty spaces by 
rolling up, down, left or right, but it won't stop rolling until hitting a wall. When the ball stops, 
it could choose the next direction.
Given the ball's start position, the destination and the maze, determine whether the ball could 
stop at the destination.
The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space. 
You may assume that the borders of the maze are all walls. The start and destination 
coordinates are represented by row and column indexes.
Example 1
Input 1: a maze represented by a 2D array

0 0 1 0 0
0 0 0 0 0
0 0 0 1 0
1 1 0 1 1
0 0 0 0 0

Input 2: start coordinate (rowStart, colStart) = (0, 4)
Input 3: destination coordinate (rowDest, colDest) = (4, 4)

Output: true
Explanation: One possible way is : left -> down -> left -> down -> right -> down -> right.
*/


function hasPath(maze, start, destination) {
    let visited = new Array(maze.length);
    let moves = [[0,1], [0,-1], [1, 0], [-1, 0]];

    for(let i=0;i<maze.length;i++) {
        visited[i] = new Array(maze[0].length).fill(false);
    }
    let q = [];
    q.unshift(start);
    while(q.length > 0) {
        let pos = q.pop();
        if(pos[0] === destination[0] && pos[1] === destination[1]) {
            return true;
        }
        for(let move of moves) {
            let x = pos[0] + move[0];
            let y = pos[1] + move[1];
            while(x >= 0 && x < maze.length && y >= 0 && y < maze[0].length && maze[x][y] === 0) {
                x = x + move[0];
                y = y + move[1];
            }
            x = x - move[0];
            y = y - move[1];
            if(x >= 0 && y >= 0 && !visited[x][y]) {
                let point = [x, y];
                visited[x][y] = true;
                q.unshift(point);
            }
        }
    }
    return false;
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

console.log(hasPath(maze, start, dst));